"use client";

import Link from "next/link";

import {
  Mail,
  Lock,
  User,
  ArrowRight,
} from "lucide-react";

import { useState } from "react";

import { useRouter } from "next/navigation";

import AuthLayout from "./AuthLayout";

export default function RegisterForm() {

  const router = useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleRegister(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      setLoading(true);

      localStorage.setItem(
        "mc_role",
        "personal"
      );

      router.push("/dashboard");

    } catch {

      alert("Registration failed");

    } finally {

      setLoading(false);

    }
  }

  return (
    <AuthLayout
      title="Create Account"
      subtitle="
        Join the enterprise semiconductor
        marketplace and access verified
        supplier inventory.
      "
    >

      <form
        onSubmit={handleRegister}
        className="space-y-6"
      >

        {/* NAME */}

        <div>

          <label className="
            mb-3 block
            text-sm font-medium
            text-gray-300
          ">
            Full Name
          </label>

          <div className="relative">

            <User
              size={20}
              className="
                absolute left-4 top-1/2
                -translate-y-1/2
                text-cyan-400
              "
            />

            <input
              type="text"
              required
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Enter full name"
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

        {/* EMAIL */}

        <div>

          <label className="
            mb-3 block
            text-sm font-medium
            text-gray-300
          ">
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

          <label className="
            mb-3 block
            text-sm font-medium
            text-gray-300
          ">
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
              placeholder="Create password"
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
            ? "Creating Account..."
            : "Create Account"}

          <ArrowRight size={20} />

        </button>

        {/* FOOTER */}

        <div className="
          border-t border-white/10
          pt-6 text-center
        ">

          <p className="text-gray-400">

            Already have an account?

          </p>

          <Link
            href="/auth/login"
            className="
              mt-3 inline-block
              font-semibold
              text-cyan-400
            "
          >
            Login Instead
          </Link>

          <div className="mt-5">

            <Link
              href="/auth/business/register"
              className="text-sm text-gray-500"
            >
              Become Supplier →
            </Link>

          </div>
        </div>
      </form>
    </AuthLayout>
  );
}