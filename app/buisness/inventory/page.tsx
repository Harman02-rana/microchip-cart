"use client";

import {
  useEffect,
  useState,
} from "react";

import { supabase } from "@/lib/supabase";

import { useAuth } from "@/context/AuthContext";

import { Product } from "@/types/product";

export default function InventoryPage() {
  const { user } = useAuth();

  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (!user) return;

    async function fetchProducts() {
  if (!user) return;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("seller_id", (user as any).id);

  if (!error && data) {
    setProducts(data);
  }

  setLoading(false);
}

    fetchProducts();
  }, [user]);

  async function deleteProduct(
    id: number
  ) {
    const { error } =
      await supabase
        .from("products")
        .delete()
        .eq("id", id);

    if (!error) {
      setProducts((prev) =>
        prev.filter(
          (product) =>
            product.id !== id
        )
      );
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading inventory...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        <div className="mb-10">

          <h1 className="text-5xl font-black mb-4">
            Inventory Management
          </h1>

          <p className="text-zinc-400 text-lg">
            Manage your semiconductor products.
          </p>

        </div>

        {products.length === 0 ? (
          <div className="text-zinc-400 text-xl">
            No products uploaded yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            {products.map(
              (product) => (
                <div
                  key={product.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden"
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover"
                  />

                  <div className="p-6">

                    <div className="text-green-400 text-sm mb-2">
                      {product.category}
                    </div>

                    <h2 className="text-2xl font-bold mb-3">
                      {product.name}
                    </h2>

                    <p className="text-zinc-400 text-sm mb-6">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-6">

                      <div className="text-2xl font-bold">
                        ₹{product.price}
                      </div>

                      <div className="text-green-400">
                        Stock:
                        {" "}
                        {product.stock}
                      </div>

                    </div>

                    <button
                      onClick={() =>
                        deleteProduct(
                          product.id
                        )
                      }
                      className="w-full bg-red-500 hover:bg-red-400 text-white py-3 rounded-2xl font-bold transition"
                    >
                      Delete Product
                    </button>

                  </div>

                </div>
              )
            )}

          </div>
        )}

      </div>

    </div>
  );
}