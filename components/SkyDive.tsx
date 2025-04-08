import React from "react";
import SkydiveScene from "./scenes/SkydiveScene";
import { View } from "@react-three/drei";
import Bounded from "./BoundedContainer";

function SkyDive() {
  const sentence = "Dive Into Better Health";
  return (
    <Bounded className="skydive h-screen">
      <h2 className="sr-only">{sentence}</h2>
      <View className="h-screen w-screen">
        <SkydiveScene text={sentence} flavor={"blackCherry"} />
      </View>
    </Bounded>
  );
}

export default SkyDive;
