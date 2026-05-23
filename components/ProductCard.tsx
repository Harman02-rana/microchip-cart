"use client";

import Link from "next/link";

import toast from "react-hot-toast";

import {
  Cpu,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import { useCart } from "@/context/CartContext";

interface Props {

  title: string;

  category: string;

  price: string;

  stock: string;
}

export default function ProductCard({
  title,
  category,
  price,
  stock,
}: Props) {

  const { addToCart } =
    useCart();

  function handleAddToCart() {

    addToCart({
      id: Math.random(),
      title,
      price: Number(
        price.replace(/[$,]/g, "")
      ),
      quantity: 1,
    });

    toast.success(
      `${title} added to cart`
    );
  }

  return (
    <motion.div

      whileHover={{
        y: -8,
      }}

      transition={{
        duration: 0.2,
      }}

      className="
        group
        overflow-hidden
        rounded-[32px]
        border border-white/10
        bg-[#081225]
        transition-all
        hover:border-cyan-400/20
      "
    >

      {/* IMAGE */}

      <div
        className="
          relative
          flex h-72
          items-center justify-center
          overflow-hidden
          bg-gradient-to-br
          from-cyan-500/10
          via-blue-500/5
          to-transparent
        "
      >

        {/* GLOW */}

        <div
          className="
            absolute
            h-40 w-40
            rounded-full
            bg-cyan-400/10
            blur-3xl
          "
        />

        {/* ICON */}

        <div
          className="
            relative
            flex h-24 w-24
            items-center justify-center
            rounded-3xl
            border border-cyan-400/20
            bg-cyan-400/10
            text-cyan-300
          "
        >

          <Cpu size={44} />

        </div>

      </div>

      {/* CONTENT */}

      <div className="p-7">

        <p
          className="
            text-sm
            font-medium
            uppercase
            tracking-[0.2em]
            text-cyan-400
          "
        >
          {category}
        </p>

        <h3
          className="
            mt-4
            text-3xl
            font-black
            leading-tight
            text-white
          "
        >
          {title}
        </h3>

        <div
          className="
            mt-5
            flex items-center gap-2
            text-green-400
          "
        >

          <div
            className="
              h-2 w-2
              rounded-full
              bg-green-400
            "
          />

          {stock}

        </div>

        {/* PRICE */}

        <div
          className="
            mt-8
            flex items-center justify-between
          "
        >

          <div>

            <p className="text-sm text-gray-500">
              Enterprise Pricing
            </p>

            <h4
              className="
                mt-1
                text-4xl
                font-black
                text-white
              "
            >
              {price}
            </h4>

          </div>

        </div>

        {/* BUTTONS */}

        <div
          className="
            mt-8
            flex gap-4
          "
        >

          <Link
            href="/product/1"
            className="
              flex flex-1
              items-center
              justify-center
              gap-2
              rounded-2xl
              border border-white/10
              bg-white/5
              px-5 py-4
              font-semibold
              text-white
              transition-all
              hover:bg-white/10
            "
          >

            View Details

            <ArrowRight size={18} />

          </Link>

          <button
            onClick={handleAddToCart}
            className="
              flex items-center
              justify-center
              rounded-2xl
              bg-cyan-400
              px-6
              text-black
              transition-all
              hover:bg-cyan-300
            "
          >

            <ShoppingCart size={20} />

          </button>

        </div>

      </div>

    </motion.div>
  );
}