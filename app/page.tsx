import Link from "next/link";

import {
  Cpu,
  ShieldCheck,
  Zap,
  Building2,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative overflow-hidden px-8 lg:px-16 pt-20 pb-28">

        {/* GRID BACKGROUND */}

        <div className="absolute inset-0 opacity-10">

          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)",
              backgroundSize:
                "45px 45px",
            }}
          />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}

          <div>

            <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-300 px-5 py-2 rounded-full mb-8">

              <Zap size={18} />

              AI Powered Semiconductor Marketplace

            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] mb-8">

              Powering the
              <br />

              Future with Smart
              <br />

              <span className="text-blue-500">
                Microchip
              </span>

              <br />

              Solutions

            </h1>

            <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl mb-10">

              High-performance microchips and electronic
              components engineered for industrial systems,
              robotics, IoT infrastructure and next-generation
              embedded computing.

            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mb-16">

              <Link
                href="/products"
                className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3"
              >

                <Cpu size={22} />

                Explore Products

              </Link>

              <Link
                href="/orders"
                className="border border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/10 transition px-8 py-4 rounded-2xl font-bold text-lg"
              >

                Track Orders

              </Link>

            </div>

            {/* STATS */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-blue-900/30 pt-10">

              <div>

                <Cpu
                  className="text-blue-500 mb-3"
                  size={32}
                />

                <div className="text-4xl font-black mb-1">
                  10K+
                </div>

                <div className="text-zinc-400">
                  Products
                </div>

              </div>

              <div>

                <Building2
                  className="text-purple-500 mb-3"
                  size={32}
                />

                <div className="text-4xl font-black mb-1">
                  2K+
                </div>

                <div className="text-zinc-400">
                  Clients
                </div>

              </div>

              <div>

                <ShieldCheck
                  className="text-green-500 mb-3"
                  size={32}
                />

                <div className="text-4xl font-black mb-1">
                  99.9%
                </div>

                <div className="text-zinc-400">
                  Quality
                </div>

              </div>

              <div>

                <Zap
                  className="text-yellow-400 mb-3"
                  size={32}
                />

                <div className="text-4xl font-black mb-1">
                  24/7
                </div>

                <div className="text-zinc-400">
                  Support
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative">

            <div className="absolute inset-0 bg-blue-500 blur-[140px] opacity-20 rounded-full" />

            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
              alt="Microchip"
              className="relative rounded-[40px] border border-blue-500/30 shadow-[0_0_60px_rgba(59,130,246,0.25)]"
            />

          </div>

        </div>

      </section>

      {/* TECHNOLOGY SECTION */}

      <section className="relative px-8 lg:px-16 py-28 bg-[#020817] overflow-hidden">

        <div className="absolute inset-0 opacity-10">

          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)",
              backgroundSize:
                "45px 45px",
            }}
          />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* HEADER */}

          <div className="flex items-center justify-between mb-16">

            <div>

              <div className="text-blue-500 uppercase tracking-[0.3em] text-sm mb-4">

                Technologies

              </div>

              <h2 className="text-5xl lg:text-6xl font-black leading-tight">

                Explore Semiconductor
                <br />

                Ecosystems

              </h2>

            </div>

            <button className="border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 transition px-7 py-4 rounded-2xl text-lg">

              View All

            </button>

          </div>

          {/* CARDS */}

          <div className="grid lg:grid-cols-4 gap-8">

            {/* CARD 1 */}

            <div className="group relative overflow-hidden rounded-[35px] border border-blue-500/20 bg-[#07111F]">

              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-500 opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 p-8">

                <div className="text-blue-400 text-sm mb-3">
                  Embedded Processing
                </div>

                <h3 className="text-4xl font-black mb-5">
                  Microcontrollers
                </h3>

                <button className="text-zinc-300 hover:text-white transition">

                  Explore Technology →

                </button>

              </div>

            </div>

            {/* CARD 2 */}

            <div className="group relative overflow-hidden rounded-[35px] border border-blue-500/20 bg-[#07111F]">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-500 opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 p-8">

                <div className="text-blue-400 text-sm mb-3">
                  Machine Learning Chips
                </div>

                <h3 className="text-4xl font-black mb-5">
                  AI Accelerators
                </h3>

                <button className="text-zinc-300 hover:text-white transition">

                  Explore Technology →

                </button>

              </div>

            </div>

            {/* CARD 3 */}

            <div className="group relative overflow-hidden rounded-[35px] border border-blue-500/20 bg-[#07111F]">

              <img
                src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1200&auto=format&fit=crop"
                className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-500 opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 p-8">

                <div className="text-blue-400 text-sm mb-3">
                  Wireless Infrastructure
                </div>

                <h3 className="text-4xl font-black mb-5">
                  Connectivity
                </h3>

                <button className="text-zinc-300 hover:text-white transition">

                  Explore Technology →

                </button>

              </div>

            </div>

            {/* CARD 4 */}

            <div className="group relative overflow-hidden rounded-[35px] border border-blue-500/20 bg-[#07111F]">

              <img
                src="https://images.unsplash.com/photo-1591799265444-d66432b91588?q=80&w=1200&auto=format&fit=crop"
                className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-500 opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 p-8">

                <div className="text-blue-400 text-sm mb-3">
                  Industrial IoT Systems
                </div>

                <h3 className="text-4xl font-black mb-5">
                  Sensors
                </h3>

                <button className="text-zinc-300 hover:text-white transition">

                  Explore Technology →

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}