"use client";
import React from "react";
import TextSplitter from "@/components/TextSplitter";
import Image from "next/image";
import cansImage from "@/public/img/cans.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Flavors() {
  useGSAP(() => {
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl
      .from(".flavors-title .split-char", {
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 0.5,
      })
      .from(".flavors-body", {
        y: 20,
        opacity: 0,
      });
  });
  return (
    <div className="text-side relative z-[10] grid h-screen items-center gap-4 md:grid-cols-2">
      <div>
        <h2 className="text-side-heading text-6xl font-black text-balance text-sky-950 uppercase lg:text-8xl">
          <TextSplitter
            className="flavors-title"
            text={"Try all five flavors"}
          />
        </h2>
        <div className="flavors-body text-side-body mt-4 max-w-xl text-xl font-normal text-balance text-sky-950">
          Our soda is made with real fruit juice and a touch of cane sugar. We
          never use artificial sweeteners or high fructose corn syrup. Try all
          five flavors and find your favorite!
        </div>
      </div>
      <div className="relative h-full w-full md:hidden">
        <Image
          src={cansImage}
          alt="All flavors"
          fill
          sizes="100"
          quality={100}
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Flavors;
