"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { loginUser, getProfile } from "@/lib/auth";

export default function PersonalLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { data, error } =
      await loginUser(email, password);

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      const { data: profile } =
        await getProfile(data.user.id);

      if (profile?.role === "admin") {
        router.push("/admin");
      } else if (
        profile?.account_type ===
        "business"
      ) {
        router.push(
          "/business/dashboard"
        );
      } else {
        router.push("/dashboard");
      }
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-white">
      <div className="mb-10 text-5xl font-bold">
        <span className="text-white">
          MC
        </span>
        <span className="text-green-400">
          {" "}
          CHIP
        </span>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-md p-10">
        <h1 className="text-3xl font-bold mb-8">
          Personal Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-green-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-green-400"
              required
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 rounded-xl p-3 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-xl transition"
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </button>
        </form>

        <div className="mt-8 text-sm text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/register/personal"
            className="text-green-400 hover:underline"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}