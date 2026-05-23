"use client";

import Link from "next/link";
import {
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

import { useState } from "react";
import { useRouter } from "next/navigation";

import AuthLayout from "./AuthLayout";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      // fake login
      localStorage.setItem(
        "mc_role",
        "personal"
      );

      localStorage.setItem(
        "mc_user",
        JSON.stringify({
          name: "Enterprise User",
          email,
        })
      );

      router.push("/");

    } catch {
      alert("Login failed");

    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Access your procurement dashboard and marketplace inventory."
    >
      <form
        onSubmit={handleLogin}
        className="space-y-6"
      >
        {/* EMAIL */}

        <div>
          <label
            className="
              mb-3 block
              text-sm font-medium
              text-gray-300
            "
          >
            Email Address
          </label>

          <div className="relative">
            <Mail
              size={20}
              className="
                absolute left-4 top-1/2
                -translate-y-1/2
                text-cyan-400
              "
            />

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter email"
              className="
                h-14 w-full
                rounded-2xl
                border border-white/10
                bg-[#020817]
                pl-12 pr-4
                text-white
                outline-none
                transition-all
                focus:border-cyan-400
              "
            />
          </div>
        </div>

        {/* PASSWORD */}

        <div>
          <label
            className="
              mb-3 block
              text-sm font-medium
              text-gray-300
            "
          >
            Password
          </label>

          <div className="relative">
            <Lock
              size={20}
              className="
                absolute left-4 top-1/2
                -translate-y-1/2
                text-cyan-400
              "
            />

            <input
              type="password"
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter password"
              className="
                h-14 w-full
                rounded-2xl
                border border-white/10
                bg-[#020817]
                pl-12 pr-4
                text-white
                outline-none
                transition-all
                focus:border-cyan-400
              "
            />
          </div>
        </div>

        {/* OPTIONS */}

        <div
          className="
            flex items-center justify-between
            text-sm
          "
        >
          <label
            className="
              flex items-center gap-2
              text-gray-400
            "
          >
            <input type="checkbox" />
            Remember me
          </label>

          <button
            type="button"
            className="text-cyan-400"
          >
            Forgot Password?
          </button>
        </div>

        {/* BUTTON */}

        <button
          type="submit"
          disabled={loading}
          className="
            flex h-14 w-full
            items-center justify-center gap-2
            rounded-2xl
            bg-cyan-400
            text-lg font-bold
            text-black
            transition-all
            hover:bg-cyan-300
          "
        >
          {loading
            ? "Signing In..."
            : "Access Dashboard"}

          <ArrowRight size={20} />
        </button>

        {/* FOOTER */}

        <div
          className="
            border-t border-white/10
            pt-6 text-center
          "
        >
          <p className="text-gray-400">
            Don&apos;t have an account?
          </p>

          <Link
            href="/auth/register"
            className="
              mt-3 inline-block
              font-semibold
              text-cyan-400
            "
          >
            Create Account
          </Link>

          <div className="mt-5">
            <Link
              href="/auth/business/login"
              className="text-sm text-gray-500"
            >
              Business Portal →
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}