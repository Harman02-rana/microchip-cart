"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login/personal");
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

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black mb-3">
          Welcome Back 👋
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          {user.email}
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-3">
              Orders
            </h2>

            <p className="text-zinc-400">
              View your recent chip purchases.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-3">
              Saved Cart
            </h2>

            <p className="text-zinc-400">
              Continue your semiconductor orders.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-3">
              AI Recommendations
            </h2>

            <p className="text-zinc-400">
              Suggested components based on your activity.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}