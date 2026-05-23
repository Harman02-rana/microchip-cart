"use client";

import { useState } from "react";

import { supabase } from "@/lib/supabase";

import { useAuth } from "@/context/AuthContext";

export default function RFQPage() {
  const { user } = useAuth();

  const [companyName, setCompanyName] =
    useState("");

  const [productName, setProductName] =
    useState("");

  const [quantity, setQuantity] =
    useState("");

  const [requirements, setRequirements] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!user) return;

    setLoading(true);

    const { error } =
      await supabase
        .from("rfqs")
        .insert([
          {
            user_id: (user as any).id,
            company_name:
              companyName,
            product_name:
              productName,
            quantity:
              Number(quantity),
            requirements,
            status: "pending",
          },
        ]);

    setLoading(false);

    if (!error) {
      setSuccess(true);

      setCompanyName("");
      setProductName("");
      setQuantity("");
      setRequirements("");
    }
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-black mb-6">
          Request Quotation
        </h1>

        <p className="text-zinc-400 text-lg mb-10">
          Submit large semiconductor requirements to verified suppliers.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) =>
              setCompanyName(
                e.target.value
              )
            }
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4"
            required
          />

          <input
            type="text"
            placeholder="Required Product"
            value={productName}
            onChange={(e) =>
              setProductName(
                e.target.value
              )
            }
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4"
            required
          />

          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) =>
              setQuantity(
                e.target.value
              )
            }
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4"
            required
          />

          <textarea
            placeholder="Technical Requirements"
            value={requirements}
            onChange={(e) =>
              setRequirements(
                e.target.value
              )
            }
            className="w-full h-40 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-400 text-black py-4 rounded-2xl font-bold transition"
          >
            {loading
              ? "Submitting..."
              : "Submit RFQ"}
          </button>

        </form>

        {success && (
          <div className="mt-6 bg-green-500/10 border border-green-500 text-green-400 p-5 rounded-2xl">
            RFQ submitted successfully.
          </div>
        )}

      </div>

    </div>
  );
}