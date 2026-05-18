"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

export default function PersonalLoginPage() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const { data, error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {

        alert(error.message);

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

    } catch (err) {

      console.error(err);

      alert("Login failed");

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div
        className="
          w-full
          max-w-md
          bg-[#0B1120]
          border
          border-blue-500/20
          rounded-3xl
          shadow-2xl
          shadow-blue-500/10
          p-10
        "
      >

        <h1 className="text-5xl font-black text-white leading-none">

          MICROCHIP

          <span className="block text-blue-500">
            CART
          </span>

        </h1>

        <p className="text-gray-400 mt-4 mb-8">
          Personal Account Login
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <div>

            <label className="text-sm text-gray-300 mb-2 block">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                w-full
                rounded-xl
                bg-[#111827]
                border
                border-blue-500/20
                px-5
                py-4
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20
                transition-all
              "
              placeholder="Enter your email"
            />

          </div>

          <div>

            <label className="text-sm text-gray-300 mb-2 block">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="
                w-full
                rounded-xl
                bg-[#111827]
                border
                border-blue-500/20
                px-5
                py-4
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20
                transition-all
              "
              placeholder="Enter your password"
            />

          </div>

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

            {loading
              ? "Signing In..."
              : "Sign In"}

          </button>

        </form>

        <p className="text-gray-400 text-center mt-8">

          Don&apos;t have an account?{" "}

          <Link
            href="/register"
            className="
              text-blue-400
              hover:text-blue-300
              font-medium
            "
          >
            Create Account
          </Link>

        </p>

      </div>

    </div>
  );
}