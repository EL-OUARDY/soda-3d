"use client";
import AlternatingText from "@/components/AlternatingText";
import FlavorCarousel from "@/components/FlavorCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkyDive from "@/components/SkyDive";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="px-4 md:px-6">
          <Hero />
          <SkyDive />
        </div>
        <FlavorCarousel />
        <AlternatingText />
        <Footer />
      </main>
    </>
  );
}
