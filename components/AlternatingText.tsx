import React from "react";
import Bounded from "./BoundedContainer";
import { View } from "@react-three/drei";
import AlternatingCanScene from "./scenes/AlternatingCanScene";

function AlternatingText() {
  return (
    <Bounded className="alternating-text-container relative bg-[#FDE047] text-sky-950">
      <div className="relative z-[100] grid">
        <View className="alternating-text-view absolute inset-0 h-screen w-full">
          <AlternatingCanScene />
        </View>

        <div className="alternating-section grid h-screen grid-cols-2 place-items-center gap-x-24">
          <div className="col-start-1 rounded-lg p-4 backdrop-blur-lg">
            <h2 className="text-6xl font-bold text-balance">
              Gut-Friendly Goodness
            </h2>
            <p className="mt-4 text-xl">
              Our soda is packed with prebiotics and 1 billion probiotics,
              giving your gut the love it deserves. Say goodbye to bloating and
              hello to a happy, healthy digestive system with every sip.
            </p>
          </div>
        </div>

        <div className="alternating-section grid h-screen grid-cols-2 place-items-center gap-x-24">
          <div className="col-start-2 rounded-lg p-4 backdrop-blur-lg">
            <h2 className="text-6xl font-bold text-balance">
              Light Calories, Big Flavor
            </h2>
            <p className="mt-4 text-xl">
              Indulge in bold, refreshing taste without the guilt. At just 20
              calories per can, you can enjoy all the flavor you crave with none
              of the compromise.
            </p>
          </div>
        </div>
        <div className="alternating-section grid h-screen grid-cols-2 place-items-center gap-x-24">
          <div className="col-start-1 rounded-lg p-4 backdrop-blur-lg">
            <h2 className="text-6xl font-bold text-balance">
              Naturally Refreshing
            </h2>
            <p className="mt-4 text-xl">
              Made with only the best natural ingredients, our soda is free from
              artificial sweeteners and flavors. It’s a crisp, clean taste that
              feels as good as it tastes, giving you a boost of real, natural
              refreshment.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}

export default AlternatingText;
