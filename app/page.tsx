"use client";

import Hero from "@/components/Hero";

import FeaturedBanner from "@/components/FeaturedBanner";

import TrendingSection from "@/components/TrendingSection";

import ProductSection from "@/components/ProductSection";

import ChipMarquee from "@/components/ChipMarquee";

import TechStats from "@/components/TechStats";

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

      <FeaturedBanner />

      <TrendingSection />

      <ProductSection />

      <ChipMarquee />

      <TechStats />

    </main>
  );
}