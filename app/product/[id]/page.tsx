"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { supabase } from "@/lib/supabase";

import { Product } from "@/types/product";

import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const params = useParams();

  const { addToCart } = useCart();

  const [product, setProduct] =
    useState<Product | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [added, setAdded] =
    useState(false);

  useEffect(() => {
    async function fetchProduct() {
      const { data, error } =
        await supabase
          .from("products")
          .select("*")
          .eq(
            "id",
            Number(params.id)
          )
          .single();

      if (!error && data) {
        setProduct(data);
      }

      setLoading(false);
    }

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* IMAGE */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* INFO */}
        <div>

          <div className="text-green-400 text-lg mb-3">
            {product.category}
          </div>

          <h1 className="text-5xl font-black mb-6">
            {product.name}
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="text-5xl font-bold mb-8">
            ₹{product.price}
          </div>

          <div className="mb-10">

            <span className="text-zinc-400">
              Available Stock:
            </span>{" "}

            <span className="text-green-400 font-bold">
              {product.stock}
            </span>

          </div>

          <div className="flex flex-wrap gap-5">

            <button
              onClick={() => {
                addToCart(product);

                setAdded(true);

                setTimeout(() => {
                  setAdded(false);
                }, 3000);
              }}
              className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-2xl font-bold transition"
            >
              Add To Cart
            </button>

            <button className="border border-zinc-700 hover:border-green-400 px-8 py-4 rounded-2xl transition">
              Request Quotation
            </button>

          </div>

          {added && (
            <div className="text-green-400 mt-5 font-semibold">
              Added to cart successfully ✓
            </div>
          )}

        </div>

      </div>

    </div>
  );
}