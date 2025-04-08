"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Flavors from "@/components/Flavors";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ViewCanvas from "@/components/ViewCanvas";
import { View } from "@react-three/drei";
import Scene from "@/components/Scene";
import Bubbles from "@/components/Bubbles";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        // markers: true,
      },
    });

    scrollTl.fromTo(
      "body",
      {
        backgroundColor: "#FDE047",
      },
      {
        backgroundColor: "#D9F99D",
        overwrite: "auto",
      },
      0.1,
    );
  });
  return (
    <>
      <Header />
      <main>
        <section className="px-4 md:px-6">
          <div className="page-wrapper mx-auto flex w-full max-w-7xl flex-col items-center pt-10">
            <View className="pointer-events-none sticky top-0 z-100 -mt-[100vh] hidden h-screen w-screen md:block">
              <Scene />
              <Bubbles />
            </View>
            <Hero />
            <Flavors />
            <ViewCanvas />
          </div>
        </section>
      </main>
    </>
  );
}
