"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { ShieldCheck } from "lucide-react";

export default function Hero() {

  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        pt-16
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          right-0 top-0
          h-[500px] w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-16
          lg:grid-cols-2
          lg:items-center
        "
      >

        {/* LEFT */}

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.6,
          }}
        >

          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center gap-2
              rounded-full
              border border-cyan-400/20
              bg-cyan-400/10
              px-5 py-2
              text-cyan-300
            "
          >

            <ShieldCheck size={18} />

            Trusted Semiconductor Marketplace

          </div>

          {/* TITLE */}

          <h1
            className="
              mt-8
              text-7xl
              font-black
              leading-[1.05]
              tracking-tight
              text-white
            "
          >
            Enterprise
            <br />
            Semiconductor
            <br />
            Marketplace
          </h1>

          {/* TEXT */}

          <p
            className="
              mt-8
              max-w-2xl
              text-xl
              leading-9
              text-gray-400
            "
          >
            Source processors, GPUs,
            AI accelerators,
            microcontrollers,
            and enterprise hardware
            directly from verified suppliers.
          </p>

          {/* BUTTONS */}

          <div
            className="
              mt-10
              flex flex-wrap gap-5
            "
          >

            <Link
              href="/products"
              className="
                rounded-2xl
                bg-cyan-400
                px-8 py-5
                text-lg
                font-bold
                text-black
                transition-all
                hover:bg-cyan-300
              "
            >
              Browse Products
            </Link>

            <Link
              href="/auth/business/register"
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                px-8 py-5
                text-lg
                font-semibold
                text-white
                transition-all
                hover:bg-white/10
              "
            >
              Become Supplier
            </Link>

          </div>

        </motion.div>

        {/* RIGHT CARD */}

        <motion.div

          initial={{
            opacity: 0,
            x: 40,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.6,
          }}

          className="
            rounded-[36px]
            border border-white/10
            bg-[#081225]
            p-8
            shadow-2xl
            shadow-cyan-500/10
          "
        >

          <div
            className="
              flex h-[500px]
              items-center
              justify-center
              rounded-[28px]
              bg-gradient-to-br
              from-cyan-500/10
              to-blue-500/5
            "
          >

            <div
              className="
                text-[140px]
                drop-shadow-[0_0_40px_rgba(34,211,238,0.3)]
              "
            >
              💾
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}