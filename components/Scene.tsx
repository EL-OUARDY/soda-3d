"use client ";
import { Environment } from "@react-three/drei";
import React from "react";
import FloatingCan from "./FloatingCan";

function Scene() {
  return (
    <group>
      <FloatingCan />
      <Environment files={"/hdr/lobby.hdr"} environmentIntensity={1.5} />
    </group>
  );
}

export default Scene;
