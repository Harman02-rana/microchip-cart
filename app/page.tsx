"use client";

import Hero from "@/components/Hero";

import TrendingSection from "@/components/TrendingSection";

import ProductSection from "@/components/ProductSection";

import ChipMarquee from "@/components/ChipMarquee";

export default function HomePage() {

  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-[#020817]
      "
    >

      <Hero />

      <TrendingSection />

      <ProductSection />

      <ChipMarquee />

    </main>
  );
}