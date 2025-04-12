"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useStore from "@/hooks/useStore";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Environment, View } from "@react-three/drei";
import CansScene from "@/components/scenes/CansScene";
import Bubbles from "@/components/Bubbles";
import Bounded from "@/components/BoundedContainer";
import TextSplitter from "@/components/TextSplitter";
import VerticalFadeLayer from "./VerticalFadeLayer";
import { useLenis } from "lenis/react";

gsap.registerPlugin(useGSAP);

function Hero() {
  const { ready, setBackground } = useStore();
  const isDesktop = useMediaQuery("(min-width: 768px)", true);
  const lenis = useLenis();

  useGSAP(
    () => {
      if (!ready) return;

      // Initial entrance animation timeline
      const introTl = gsap.timeline();

      introTl
        // Make hero visible
        .set(".hero", { opacity: 1 })
        // Animate main title with zoom effect
        .from(".hero-title", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        // Fade in subheading with slight upward motion
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8",
        )
        // Fade in body text
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        // Fade in CTA button
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      // Scroll-triggered animation timeline
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          onUpdate: () => {
            // Grab the current color on each tick:
            const color = gsap.getProperty("body", "backgroundColor");
            // Store it in state:
            setBackground(color.toString());
          },
        },
      });

      scrollTl
        // Background color transition on scroll
        .fromTo(
          "body",
          {
            backgroundColor: getComputedStyle(document.documentElement)
              .getPropertyValue("--background")
              .trim(),
          },
          {
            backgroundColor: getComputedStyle(document.documentElement)
              .getPropertyValue("--all-flavors-background")
              .trim(),
            overwrite: "auto",
          },
          1,
        )
        // Animate flavor section title characters
        .from(".flavors-title .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        // Fade in flavor section body text
        .from(".flavors-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready] },
  );

  return (
    <Bounded className="hero opacity-0">
      <View className="pointer-events-none sticky top-0 z-100 -mt-[100vh] h-screen w-screen">
        {isDesktop && <CansScene />}
        <Bubbles />
        <Environment files={"/hdr/lobby.hdr"} environmentIntensity={1.5} />
      </View>
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="text-primary flex flex-col gap-2 text-7xl leading-[.8] font-black uppercase md:text-[7.5rem] lg:text-[9rem]">
              <TextSplitter
                className="hero-title"
                text={"Never Settle"}
                display="block"
                onlyWords
              />
            </h1>
            <div className="hero-subheading mt-12 text-4xl font-semibold md:text-5xl lg:text-6xl">
              Soda Perfected
            </div>
            <div className="hero-body text-xl font-normal md:text-2xl">
              3-5g sugar. 9g fiber. 5 delightful flavors.
            </div>
            <button
              onClick={() => {
                lenis?.scrollTo(window.scrollY + window.innerHeight, {
                  duration: 2.5,
                  easing: (x) => 1 - Math.cos((x * Math.PI) / 2), // easeInSine
                });
              }}
              className="hero-button bg-primary hover:bg-primary/80 mt-12 cursor-pointer rounded-xl px-5 py-4 text-center text-xl font-bold tracking-wide text-white uppercase transition-colors duration-150 md:text-2xl"
            >
              Shop Now
            </button>
          </div>
        </div>

        <div className="text-side relative grid items-center gap-4 md:h-screen md:grid-cols-2">
          <div className="z-101 mb-30">
            <h2 className="text-side-heading text-6xl font-black text-balance uppercase lg:text-8xl">
              <TextSplitter
                className="flavors-title"
                text={"Try All Five Flavors"}
              />
            </h2>
            <div className="flavors-body text-side-body mt-4 max-w-xl text-xl font-normal text-balance">
              Crafted with genuine fruit juice and a hint of cane sugar. We
              steer clear of artificial sweeteners and high fructose corn syrup.
              Sample all five flavors to discover your favorite!​
            </div>
          </div>
        </div>
      </div>
      {/* Gradient overlay at the bottom of the hero section for a smooth visual transition */}
      <VerticalFadeLayer className="pointer-events-none z-109 -mt-20 h-20 w-screen" />
    </Bounded>
  );
}

export default Hero;
