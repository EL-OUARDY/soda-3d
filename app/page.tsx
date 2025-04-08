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
import useStore from "@/hooks/useStore";
import useMediaQuery from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const { ready } = useStore();
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      if (!ready && isDesktop) return;

      const introTl = gsap.timeline();

      introTl.set(".page-wrapper", { opacity: 1 });

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
    },
    { dependencies: [ready, isDesktop] },
  );
  return (
    <>
      <Header />
      <main>
        <section className="px-4 md:px-6">
          <div className="page-wrapper mx-auto flex w-full max-w-7xl flex-col items-center pt-10 opacity-0">
            {isDesktop && (
              <View className="pointer-events-none sticky top-0 z-100 -mt-[100vh] h-screen w-screen">
                <Scene />
                <Bubbles />
              </View>
            )}
            <Hero />
            <Flavors />
            <ViewCanvas />
          </div>
        </section>
      </main>
    </>
  );
}
