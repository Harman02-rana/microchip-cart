"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BusinessDashboardPage() {
  const { user, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/business/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <h1 className="text-5xl font-black mb-3">
            Business Dashboard
          </h1>

          <p className="text-zinc-400 text-xl">
            Manage your semiconductor inventory and RFQs.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Products
            </h2>

            <p className="text-zinc-400 mb-6">
              Manage uploaded products.
            </p>

            <button
  onClick={() =>
    window.location.href =
      "/business/inventory"
  }
  className="bg-green-500 hover:bg-green-400 text-black font-bold px-5 py-3 rounded-xl"
>
  View Products
</button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Add Product
            </h2>

            <p className="text-zinc-400 mb-6">
              Upload new semiconductor inventory.
            </p>

            <button
  onClick={() =>
    router.push(
      "/business/add-product"
    )
  }
  className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-5 py-3 rounded-xl"
>
  Add New
</button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              RFQs
            </h2>

            <p className="text-zinc-400 mb-6">
              View bulk customer requests.
            </p>

            <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold px-5 py-3 rounded-xl">
              Open RFQs
            </button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Revenue
            </h2>

            <p className="text-zinc-400 mb-6">
              Monitor sales analytics.
            </p>

            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 py-3 rounded-xl">
              Analytics
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}