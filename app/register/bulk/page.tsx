"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUpUser } from "@/lib/auth";

export default function BulkRegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const { error } = await signUpUser(
        email,
        password,
        {
          full_name: fullName,
          phone,
          company_name: companyName,
          account_type: "bulk",
        }
      );

      if (error) {
        setError(error.message);
        return;
      }

      alert("Account created successfully!");

      router.push("/login/bulk");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#071028] border border-blue-900 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Bulk Buyer Register
        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >
          <div>
            <label className="block mb-2 text-sm">
              Full Name
            </label>

            <input
              type="text"
              required
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-black outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Company Name
            </label>

            <input
              type="text"
              required
              value={companyName}
              onChange={(e) =>
                setCompanyName(e.target.value)
              }
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-black outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Phone Number
            </label>

            <input
              type="text"
              required
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-black outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Email Address
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-black outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-black outline-none"
            />
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-400 text-sm p-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-lg font-semibold"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            href="/login/bulk"
            className="text-blue-400 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}