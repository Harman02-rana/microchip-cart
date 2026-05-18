"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({
  name,
  price,
  image,
  category,
}: ProductProps) {
  return (
    <div className="group rounded-2xl border border-blue-900/40 bg-[#071120] overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]">
      
      <div className="relative h-56 w-full overflow-hidden bg-black">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-blue-400 mb-2">
          {category}
        </p>

        <h3 className="text-white text-lg font-semibold line-clamp-2">
          {name}
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-400">
            ₹{price}
          </span>

          <Link
            href="/cart"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}