import React, { useRef } from "react";
import * as THREE from "three";
import FloatingCan from "../FloatingCan";
import { SodaCanProps } from "../SodaCan";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cloud, Clouds, Environment, Text } from "@react-three/drei";
import useMediaQuery from "@/hooks/useMediaQuery";
import useStore from "@/hooks/useStore";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  text: string;
  flavor: SodaCanProps["flavor"];
}
function SkydiveScene({ text, flavor }: Props) {
  const { setBackground } = useStore();

  const groupRef = useRef<THREE.Group>(null);
  const canRef = useRef<THREE.Group>(null);
  const cloud1Ref = useRef<THREE.Group>(null);
  const cloud2Ref = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Group>(null);
  const wordsRef = useRef<THREE.Group>(null);

  const ANGLE = 75 * (Math.PI / 180);

  function getXPosition(distance: number) {
    return distance * Math.cos(ANGLE);
  }

  function getYPosition(distance: number) {
    return distance * Math.sin(ANGLE);
  }

  function getXYPositions(distance: number) {
    return {
      x: getXPosition(distance),
      y: getYPosition(-1 * distance),
    };
  }

  useGSAP(() => {
    // Early return if any refs are not available
    if (
      !cloudsRef.current ||
      !canRef.current ||
      !wordsRef.current ||
      !cloud1Ref.current ||
      !cloud2Ref.current
    )
      return;

    // Initial scene setup - positioning elements
    gsap.set(cloudsRef.current.position, { z: 10 });
    gsap.set(canRef.current.position, {
      ...getXYPositions(-4),
    });
    gsap.set(
      wordsRef.current.children.map((word) => word.position),
      { ...getXYPositions(7), z: 2 },
    );

    // Continuous can rotation animation
    gsap.to(canRef.current.rotation, {
      y: Math.PI * 2,
      duration: 1.7,
      repeat: -1,
      ease: "none",
    });

    // Continuous cloud movement setup
    const DISTANCE = 15;
    const DURATION = 6;

    gsap.set([cloud2Ref.current.position, cloud1Ref.current.position], {
      ...getXYPositions(DISTANCE),
    });

    // Cloud 1 infinite diagonal movement
    gsap.to(cloud1Ref.current.position, {
      y: `+=${getYPosition(DISTANCE * 2)}`,
      x: `+=${getXPosition(DISTANCE * -2)}`,
      ease: "none",
      repeat: -1,
      duration: DURATION,
    });

    // Cloud 2 infinite diagonal movement (delayed start)
    gsap.to(cloud2Ref.current.position, {
      y: `+=${getYPosition(DISTANCE * 2)}`,
      x: `+=${getXPosition(DISTANCE * -2)}`,
      ease: "none",
      repeat: -1,
      delay: DURATION / 2,
      duration: DURATION,
    });

    // Scroll-triggered animation sequence
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skydive",
        pin: true,
        start: "top top",
        end: "+=2000",
        scrub: 1.5,
      },
    });

    scrollTl
      // Background color transition
      .to("body", {
        backgroundColor: "#C0F0F5",
        overwrite: "auto",
        duration: 0.1,
        onUpdate: () => {
          // Grab the current color on each tick:
          const color = gsap.getProperty("body", "backgroundColor");
          // Store it in state:
          setBackground(color.toString());
        },
      })
      // Clouds approach viewer
      .to(cloudsRef.current.position, { z: 0, duration: 0.3 }, 0)
      // Can moves to center
      .to(canRef.current.position, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "back.out(1.7)",
      })
      // Text animation sequence
      .to(
        wordsRef.current.children.map((word) => word.position),
        {
          keyframes: [
            { x: 0, y: 0, z: -1 },
            { ...getXYPositions(-7), z: -7 },
          ],
          stagger: 0.3,
        },
        0,
      )
      // Can exits scene
      .to(canRef.current.position, {
        ...getXYPositions(4),
        duration: 0.5,
        ease: "back.in(1.7)",
      })
      // Clouds move away from viewer
      .to(cloudsRef.current.position, { z: 7, duration: 0.5 });
  });

  return (
    <group ref={groupRef}>
      {/* Can */}
      <group rotation={[0, 0, 0.5]}>
        <FloatingCan
          ref={canRef}
          flavor={flavor}
          rotationIntensity={0}
          floatIntensity={3}
          floatSpeed={3}
        >
          <pointLight intensity={30} color="#8C0413" decay={0.6} />
        </FloatingCan>
      </group>

      {/* Clouds */}
      <Clouds ref={cloudsRef}>
        <Cloud ref={cloud1Ref} bounds={[10, 10, 2]} />
        <Cloud ref={cloud2Ref} bounds={[10, 10, 2]} />
      </Clouds>

      {/* Text */}
      <group ref={wordsRef}>
        {text && <ThreeText text={text} color="#F97315" />}
      </group>

      {/* Lights */}
      <ambientLight intensity={2} color="#9DDEFA" />
      <Environment files="/hdr/field.hdr" environmentIntensity={1.5} />
    </group>
  );
}

function ThreeText({
  text,
  color = "white",
}: {
  text: string;
  color?: string;
}) {
  const words = text.toUpperCase().split(" ");

  const material = new THREE.MeshLambertMaterial();
  const isDesktop = useMediaQuery("(min-width: 950px)", true);

  return words.map((word: string, wordIndex: number) => (
    <Text
      key={wordIndex}
      scale={isDesktop ? 1 : 0.5}
      color={color}
      material={material}
      font="/fonts/Alpino-Variable.woff"
      fontWeight={900}
      anchorX={"center"}
      anchorY={"middle"}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?'"
    >
      {word}
    </Text>
  ));
}

export default SkydiveScene;
