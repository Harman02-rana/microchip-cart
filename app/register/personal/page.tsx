"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUpUser } from "@/lib/auth";

export default function PersonalRegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await signUpUser(
      email,
      password,
      {
        full_name: fullName,
        phone,
      },
      "personal"
    );

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md bg-[#0B1120] border border-blue-500/20 rounded-3xl p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black tracking-tight">
            <span className="text-white">MC</span>{" "}
            <span className="text-blue-500">CHIP</span>
          </h1>

          <p className="text-gray-400 mt-3">
            Create your engineering account
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Full Name
            </label>

            <input
              type="text"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
              required
              className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-4 text-white outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Phone Number
            </label>

            <input
              type="text"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              required
              className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-4 text-white outline-none focus:border-blue-500"
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-4 text-white outline-none focus:border-blue-500"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
              className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-4 text-white outline-none focus:border-blue-500"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-4 rounded-xl font-semibold text-lg"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>

        </form>

        <p className="text-center text-gray-400 mt-8">
          Already have an account?{" "}
          <Link
            href="/login/personal"
            className="text-blue-500 hover:text-blue-400 font-semibold"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}