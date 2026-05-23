"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AddProductPage() {
  const router = useRouter();

  const { user } = useAuth();

  const [name, setName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [image, setImage] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [stock, setStock] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!user) return;

    setLoading(true);

    const { error } =
      await supabase
        .from("products")
        .insert([
          {
            name,
            description,
            price: Number(price),
            image,
            category,
            stock: Number(stock),
           seller_id: (user as any).id || "demo-user",
          },
        ]);

    setLoading(false);

    if (!error) {
      router.push(
        "/business/dashboard"
      );
    } else {
      alert(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-black mb-10">
          Add Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4"
            required
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 h-40"
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4"
            required
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) =>
              setImage(e.target.value)
            }
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4"
            required
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4"
            required
          />

          <input
            type="number"
            placeholder="Stock Quantity"
            value={stock}
            onChange={(e) =>
              setStock(e.target.value)
            }
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-2xl transition"
          >
            {loading
              ? "Uploading..."
              : "Add Product"}
          </button>

        </form>

      </div>

    </div>
  );
}