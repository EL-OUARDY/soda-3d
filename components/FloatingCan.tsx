"use client";

import { forwardRef, ReactNode } from "react";
import { Float } from "@react-three/drei";

import { Group } from "three";
import SodaCan, { SodaCanProps } from "./SodaCan";

interface FloatingCanProps {
  flavor?: SodaCanProps["flavor"];
  floatSpeed?: number;
  scale?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
}

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1.5,
      scale = 2,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <SodaCan flavor={flavor} scale={scale} />
        </Float>
      </group>
    );
  },
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
