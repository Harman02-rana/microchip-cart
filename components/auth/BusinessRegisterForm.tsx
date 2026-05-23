"use client";

import Link from "next/link";

import {
  Mail,
  Lock,
  Building2,
  User,
  ArrowRight,
} from "lucide-react";

import { useState } from "react";

import { useRouter } from "next/navigation";

import AuthLayout from "./AuthLayout";

export default function BusinessRegisterForm() {

  const router = useRouter();

  const [company, setCompany] =
    useState("");

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
  "business"
);

window.location.href =
  "/business/dashboard";

    } catch {

      alert(
        "Supplier registration failed"
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <AuthLayout
      title="Become Supplier"
      subtitle="
        Join the enterprise semiconductor
        marketplace and start managing
        inventory, RFQs, and procurement operations.
      "
    >

      <form
        onSubmit={handleRegister}
        className="space-y-6"
      >

        {/* COMPANY */}

        <div>

          <label className="
            mb-3 block
            text-sm font-medium
            text-gray-300
          ">
            Company Name
          </label>

          <div className="relative">

            <Building2
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
              value={company}
              onChange={(e) =>
                setCompany(e.target.value)
              }
              placeholder="Enter company name"
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

        {/* CONTACT PERSON */}

        <div>

          <label className="
            mb-3 block
            text-sm font-medium
            text-gray-300
          ">
            Contact Person
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
            ? "Creating Supplier Account..."
            : "Create Supplier Account"}

          <ArrowRight size={20} />

        </button>

        {/* FOOTER */}

        <div className="
          border-t border-white/10
          pt-6 text-center
        ">

          <p className="text-gray-400">

            Already registered as supplier?

          </p>

          <Link
            href="/auth/business/login"
            className="
              mt-3 inline-block
              font-semibold
              text-cyan-400
            "
          >
            Access Supplier Portal
          </Link>

          <div className="mt-5">

            <Link
              href="/auth/register"
              className="text-sm text-gray-500"
            >
              Personal Account →
            </Link>

          </div>
        </div>
      </form>
    </AuthLayout>
  );
}