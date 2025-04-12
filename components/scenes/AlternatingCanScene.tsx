"use client";
import React, { useRef } from "react";
import FloatingCan from "../FloatingCan";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Group } from "three";
import useMediaQuery from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function AlternatingCanScene() {
  const canRef = useRef<Group>(null);
  const bgColors = [
    getComputedStyle(document.documentElement)
      .getPropertyValue("--section-1-background")
      .trim(),
    getComputedStyle(document.documentElement)
      .getPropertyValue("--section-2-background")
      .trim(),
    getComputedStyle(document.documentElement)
      .getPropertyValue("--section-3-background")
      .trim(),
  ];
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      if (!canRef.current) return;

      const sections = gsap.utils.toArray(".alternating-section");

      // Create a scrolling timeline
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".alternating-text-view",
          endTrigger: ".alternating-text-container",
          pin: true,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // Animate each section except the first one
      sections.forEach((_, index) => {
        if (!canRef.current || index === 0) return;

        // Calculate position and rotation based on section index and screen size
        const isOdd = index % 2 !== 0;
        const xPosition = isDesktop ? (isOdd ? "-1" : "1") : 0;
        const yRotation = isDesktop ? (isOdd ? ".4" : "-.4") : 0;

        // Add sequential animations to the timeline
        scrollTl
          // Move can horizontally
          .to(canRef.current.position, {
            x: xPosition,
            ease: "circ.inOut",
            delay: 0.5,
          })
          // Rotate can (happens simultaneously with position change)
          .to(
            canRef.current.rotation,
            {
              y: yRotation,
              ease: "back.inOut",
            },
            "<",
          )
          // Change background color
          .to(".alternating-text-container", {
            backgroundColor: gsap.utils.wrap(bgColors, index),
          });
      });
    },
    { dependencies: [isDesktop] },
  );

  return (
    <group
      ref={canRef}
      position-x={isDesktop ? 1 : 0}
      rotation-y={isDesktop ? -0.3 : 0}
    >
      <FloatingCan flavor="strawberryLemonade" />
      <Environment files={"/hdr/lobby.hdr"} environmentIntensity={1.5} />
    </group>
  );
}

export default AlternatingCanScene;
