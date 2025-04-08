"use client";
import React from "react";
import TextSplitter from "./TextSplitter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useStore from "@/hooks/useStore";
import useMediaQuery from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP);

function Hero() {
  const { ready } = useStore();
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      if (!ready && isDesktop) return;
      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-title", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8",
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });
    },
    { dependencies: [ready, isDesktop] },
  );

  return (
    <div className="hero grid h-screen place-items-center opacity-0">
      <div className="grid auto-rows-min place-items-center text-center">
        <h1 className="text-7xl leading-[.8] font-black text-orange-500 uppercase md:text-[9rem] lg:text-[13rem]">
          <TextSplitter
            className="hero-title"
            text={"LIVE GUTSY"}
            display="block"
            onlyWords
          />
        </h1>
        <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
          Soda Perfected
        </div>
        <div className="hero-body text-2xl font-normal text-sky-950">
          3-5g sugar. 9g fiber. 5 delicious flavors.
        </div>
        <button className="hero-button mt-12 cursor-pointer rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-orange-700 md:text-2xl">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
