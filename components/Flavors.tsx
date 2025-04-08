import React from "react";
import TextSplitter from "@/components/TextSplitter";
import Image from "next/image";
import cansImage from "@/public/img/cans.png";

function Flavors() {
  return (
    <div className="text-side relative z-[10] grid h-screen items-center gap-4 md:grid-cols-2">
      <div>
        <h2 className="text-side-heading text-6xl font-black text-balance text-sky-950 uppercase lg:text-8xl">
          <TextSplitter text={"Try all five flavors"} />
        </h2>
        <div className="text-side-body mt-4 max-w-xl text-xl font-normal text-balance text-sky-950">
          Our soda is made with real fruit juice and a touch of cane sugar. We
          never use artificial sweeteners or high fructose corn syrup. Try all
          five flavors and find your favorite!
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src={cansImage}
          alt="About Us"
          fill
          sizes="100vw"
          quality={100}
          priority
          className="object-cover"
          placeholder="blur"
        />
      </div>
    </div>
  );
}

export default Flavors;
