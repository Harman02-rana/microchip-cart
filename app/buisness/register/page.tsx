"use client";

import { useState } from "react";
import { signUp } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export default function BusinessRegisterPage() {
  const [companyName, setCompanyName] =
    useState("");

  const [gstNumber, setGstNumber] =
    useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const { data, error } =
      await signUp(email, password);

    if (error) {
      alert(error.message);
      return;
    }

    const user = data.user;

    if (user) {
      await supabase
        .from("profiles")
        .insert({
          id: user.id,
          email,
          role: "business",
          account_type:
            "enterprise",
          company_name:
            companyName,
          gst_number: gstNumber,
        });
    }

    alert("Business account created");
  }

  return (
    <main className="min-h-screen bg-[#020817] flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#071225] border border-white/10 rounded-3xl p-10"
      >
        <h1 className="text-4xl font-bold text-white mb-8">
          Business Account
        </h1>

        <div className="space-y-5">
          <input
            placeholder="Company Name"
            value={companyName}
            onChange={(e) =>
              setCompanyName(
                e.target.value
              )
            }
            className="w-full h-14 px-5 rounded-2xl bg-[#020817] border border-white/10 text-white"
          />

          <input
            placeholder="GST Number"
            value={gstNumber}
            onChange={(e) =>
              setGstNumber(
                e.target.value
              )
            }
            className="w-full h-14 px-5 rounded-2xl bg-[#020817] border border-white/10 text-white"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full h-14 px-5 rounded-2xl bg-[#020817] border border-white/10 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full h-14 px-5 rounded-2xl bg-[#020817] border border-white/10 text-white"
          />

          <button className="w-full h-14 rounded-2xl bg-blue-600 text-white font-semibold">
            Create Business Account
          </button>
        </div>
      </form>
    </main>
  );
}