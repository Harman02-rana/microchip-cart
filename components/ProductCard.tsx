"use client";

import Link from "next/link";

type ProductProps = {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    image: string;
    description: string;
  };
};

export default function ProductCard({
  product,
}: ProductProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group"
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-green-400 transition duration-300 hover:scale-[1.02]">

        <div className="h-56 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-5">

          <div className="text-sm text-green-400 mb-2">
            {product.category}
          </div>

          <h2 className="text-white text-xl font-bold mb-3">
            {product.name}
          </h2>

          <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">

            <div>
              <div className="text-2xl font-bold text-white">
                ₹{product.price}
              </div>

              <div className="text-xs text-zinc-500">
                {product.stock} in stock
              </div>
            </div>

            <button className="bg-green-500 text-black px-4 py-2 rounded-xl font-semibold hover:bg-green-400 transition">
              View
            </button>

          </div>

        </div>

      </div>
    </Link>
  );
}