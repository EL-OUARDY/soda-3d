import React from "react";
import Bounded from "./BoundedContainer";
import { View } from "@react-three/drei";
import AlternatingCanScene from "./scenes/AlternatingCanScene";

function AlternatingText() {
  return (
    <Bounded className="alternating-text-container bg-section-1-background relative">
      <div className="relative grid">
        <View className="alternating-text-view absolute inset-0 h-screen w-full">
          <AlternatingCanScene />
        </View>

        <div className="alternating-section z-101 grid h-screen place-items-center gap-x-24 md:grid-cols-2">
          <div className="col-start-1 rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30">
            <h2 className="text-6xl font-bold text-balance">
              Purely Refreshing
            </h2>
            <p className="mt-4 text-xl">
              Made exclusively with top-quality natural ingredients, our soda
              contains no artificial sweeteners or flavors. Enjoy a crisp, clean
              taste that feels as good as it tastes, offering genuine, natural
              refreshment.​
            </p>
          </div>
        </div>

        <div className="alternating-section z-101 grid h-screen place-items-center gap-x-24 md:grid-cols-2">
          <div className="rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30 md:col-start-2">
            <h2 className="text-6xl font-bold text-balance">
              Low Calories, Rich Taste
            </h2>
            <p className="mt-4 text-xl">
              Savor bold, invigorating flavors without the guilt. With just 20
              calories per can, indulge in the taste you love without
              compromise.​
            </p>
          </div>
        </div>

        <div className="alternating-section z-101 grid h-screen place-items-center gap-x-24 md:grid-cols-2">
          <div className="col-start-1 rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30">
            <h2 className="text-6xl font-bold text-balance">
              Gut-Friendly Benefits{" "}
            </h2>
            <p className="mt-4 text-xl">
              Infused with prebiotics and 1 billion probiotics, our soda
              nurtures your digestive system. Bid farewell to bloating and
              welcome a happier, healthier gut with every sip.​
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}

export default AlternatingText;
