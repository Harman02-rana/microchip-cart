"use client";

import Link from "next/link";

import {
  Cpu,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";

const stats = [
  {
    icon: Cpu,
    value: "10K+",
    label: "Components",
  },
  {
    icon: Truck,
    value: "Global",
    label: "Shipping",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "Quality",
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Support",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 lg:px-10">
      <div className="hero-grid absolute inset-0 opacity-70" />

      <div className="absolute right-10 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute bottom-10 left-0 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{
            opacity: 0,
            y: 32,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.55,
          }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            <Zap size={18} />
            AI Powered Semiconductor Marketplace
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[1.02] text-white md:text-6xl lg:text-7xl">
            Powering the Future with Smart{" "}
            <span className="text-blue-500">Microchip</span>
            <br />
            Solutions
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
            High-performance microchips and electronic components engineered
            for industrial systems, robotics, IoT infrastructure, embedded
            computing and AI hardware.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/products"
              className="inline-flex h-14 items-center gap-3 rounded-2xl bg-blue-600 px-8 text-lg font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-500"
            >
              <Cpu size={22} />
              Explore Products
            </Link>

            <Link
              href="/bulk/dashboard/rfq"
              className="inline-flex h-14 items-center rounded-2xl border border-blue-500/40 px-8 text-lg font-bold text-white transition hover:border-blue-400 hover:bg-blue-500/10"
            >
              Request Quote
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-[#0B1120]/80 p-5 backdrop-blur-md transition hover:border-blue-500/40"
                >
                  <Icon className="mb-3 text-blue-500" size={28} />
                  <p className="text-2xl font-black text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 36,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.55,
          }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[120px]" />

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
            alt="Microchip circuit board"
            className="relative aspect-[4/3] w-full rounded-[40px] border border-blue-500/30 object-cover shadow-2xl shadow-blue-500/20"
          />
        </motion.div>
      </div>
    </section>
  );
}