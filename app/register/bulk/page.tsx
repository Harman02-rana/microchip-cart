"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { signUpUser } from "@/lib/auth";

export default function BulkRegisterPage() {
  const router = useRouter();

  const [companyName, setCompanyName] =
    useState("");

  const [fullName, setFullName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleSignup(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    const { error } =
      await signUpUser(
        email,
        password,
        {
          full_name: fullName,
          phone,
          company_name: companyName,
        },
        "bulk"
      );

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/bulk/dashboard");
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

        <h1 className="text-5xl font-black mb-8">
          Bulk Buyer Account
        </h1>

        <form
          onSubmit={handleSignup}
          className="space-y-5"
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
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4"
            required
          />

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) =>
              setFullName(
                e.target.value
              )
            }
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4"
            required
          />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value
              )
            }
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4"
            required
          />

          {error && (
            <div className="text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-400 text-black py-4 rounded-2xl font-bold"
          >
            {loading
              ? "Creating..."
              : "Create Bulk Account"}
          </button>

        </form>

        <div className="mt-8 text-zinc-400 text-sm">

          Already have account?{" "}

          <Link
            href="/login/bulk"
            className="text-green-400"
          >
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}