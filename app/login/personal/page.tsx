"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { loginUser } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export default function PersonalLoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

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
      await loginUser(
        email,
        password
      );

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {

  const { data: profile } =
    await supabase
      .from("profiles")
      .select("account_type")
      .eq("id", data.user.id)
      .single();

  const type =
    profile?.account_type;

  if (type === "business") {
    router.push(
      "/business/dashboard"
    );
  }

  else if (type === "bulk") {
    router.push(
      "/bulk/dashboard"
    );
  }

  else {
    router.push("/dashboard");
  }
}

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

        <h1 className="text-5xl font-black mb-2">
          MicroChip {" "}
          <span className="text-green-400">
            Cart
          </span>
        </h1>

        <p className="text-zinc-400 mb-8">
          Personal Account Login
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <div>
            <label className="block mb-2 text-sm text-zinc-300">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-zinc-300">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none"
              required
            />
          </div>

          {error && (
            <div className="bg-[#0B1120]
border border-blue-500/20
backdrop-blur-xl
shadow-2xl shadow-blue-500/10
rounded-3xl">
              {error}
            </div>
          )}

          <button
  type="submit"
  disabled={loading}
  className="
    w-full
    rounded-xl
    bg-blue-600
    hover:bg-blue-700
    transition-all
    duration-300
    py-4
    text-lg
    font-semibold
    text-white
    shadow-lg
    shadow-blue-500/20
    disabled:opacity-50
  "
>
  {loading ? "Signing In..." : "Sign In"}
</button>

        </form>

        <div className="mt-8 text-center text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/register/personal"
            className="text-green-400 hover:text-green-300"
          >
            Create Account
          </Link>
        </div>

      </div>

    </div>
  );
}