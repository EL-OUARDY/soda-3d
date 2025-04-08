"use client";
import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function ViewCanvas() {
  return (
    <div className="pointer-events-none fixed top-0 left-0 z-100 h-screen w-full overflow-hidden">
      <Canvas
        camera={{
          fov: 30,
        }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <View.Port />
      </Canvas>
    </div>
  );
}

export default ViewCanvas;
