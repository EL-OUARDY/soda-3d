"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkyDive from "@/components/SkyDive";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="px-4 md:px-6">
          <Hero />
          <SkyDive />
        </div>
      </main>
    </>
  );
}
