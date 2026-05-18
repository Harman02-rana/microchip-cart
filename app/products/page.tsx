"use client";

import {
  useEffect,
  useState,
} from "react";

import ProductCard from "@/components/ProductCard";

import { supabase } from "@/lib/supabase";

import { Product } from "@/types/product";

export default function ProductsPage() {
  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } =
        await supabase
          .from("products")
          .select("*");

      if (!error && data) {
        setProducts(data);
      }

      setLoading(false);
    }

    fetchProducts();
  }, []);

  const categories = [
    "All",
    ...new Set(
      products.map(
        (p) => p.category
      )
    ),
  ];

  const filteredProducts =
    products.filter((product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "All"
          ? true
          : product.category ===
            category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading products...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">

          <h1 className="text-5xl font-black mb-4">
            Semiconductor Marketplace
          </h1>

          <p className="text-zinc-400 text-lg">
            Explore products uploaded by verified sellers.
          </p>

        </div>

        {/* SEARCH + FILTER */}
        <div className="flex flex-col md:flex-row gap-5 mb-12">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-green-400"
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-green-400"
          >

            {categories.map((cat) => (
              <option
                key={cat}
                value={cat}
              >
                {cat}
              </option>
            ))}

          </select>

        </div>

        {/* PRODUCTS */}
        {filteredProducts.length ===
        0 ? (
          <div className="text-zinc-400 text-xl">
            No matching products found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {filteredProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              )
            )}

          </div>
        )}

      </div>

    </div>
  );
}