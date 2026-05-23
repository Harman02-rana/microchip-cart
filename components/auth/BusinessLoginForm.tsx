"use client";

import Link from "next/link";

import {
  Mail,
  Lock,
  Building2,
  ArrowRight,
} from "lucide-react";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

import AuthLayout from "./AuthLayout";

export default function BusinessLoginForm() {

  const router = useRouter();

  const { login } = useAuth();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleBusinessLogin(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      setLoading(true);

      login({
        name: "Enterprise Supplier",
        email,
        role: "business",
      });

      localStorage.setItem(
        "mc_role",
        "business"
      );

      router.push(
        "/business/dashboard"
      );

    } catch {

      alert(
        "Business login failed"
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <AuthLayout
      title="Supplier Portal"
      subtitle="
        Access your supplier dashboard,
        RFQ management,
        inventory tools,
        and enterprise procurement workflows.
      "
    >

      <form
        onSubmit={handleBusinessLogin}
        className="space-y-6"
      >

        {/* COMPANY BADGE */}

        <div className="
          flex items-center gap-4
          rounded-2xl
          border border-cyan-400/20
          bg-cyan-400/10
          p-5
        ">

          <div className="
            flex h-14 w-14
            items-center justify-center
            rounded-2xl
            bg-cyan-400/20
          ">

            <Building2
              size={28}
              className="text-cyan-400"
            />

          </div>

          <div>

            <h3 className="
              text-lg font-bold text-white
            ">
              Enterprise Supplier Access
            </h3>

            <p className="
              mt-1 text-sm text-gray-300
            ">
              Verified procurement workspace
            </p>

          </div>
        </div>

        {/* EMAIL */}

        <div>

          <label className="
            mb-3 block
            text-sm font-medium
            text-gray-300
          ">
            Business Email
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
              placeholder="company@email.com"
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
            ? "Accessing Portal..."
            : "Access Supplier Dashboard"}

          <ArrowRight size={20} />

        </button>

        {/* FOOTER */}

        <div className="
          border-t border-white/10
          pt-6 text-center
        ">

          <p className="text-gray-400">

            New supplier partner?

          </p>

          <Link
            href="/auth/business/register"
            className="
              mt-3 inline-block
              font-semibold
              text-cyan-400
            "
          >
            Create Supplier Account
          </Link>

          <div className="mt-5">

            <Link
              href="/auth/login"
              className="text-sm text-gray-500"
            >
              Personal Login →
            </Link>

          </div>
        </div>
      </form>
    </AuthLayout>
  );
}