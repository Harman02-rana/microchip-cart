"use client";

import Link from "next/link";
import { Building2, Cpu, ArrowRight } from "lucide-react";

export default function AccountTypePage() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      {/* TOP BAR */}
      <div className="h-[70px] bg-[#131921] flex items-center px-10">
        <h1 className="text-white text-3xl font-black tracking-wide">
          MC <span className="text-[#f59e0b]">CHIP</span>
        </h1>
      </div>

      {/* HERO */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-6xl">
          {/* TITLE */}
          <div className="text-center mb-14">
            <h1 className="text-5xl font-black text-[#111827] mb-4">
              Welcome to MC CHIP
            </h1>

            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Choose how you want to use the platform. Whether you're buying
              components for personal projects or managing bulk procurement for
              your organization — we have dedicated workflows for both.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* PERSONAL */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 p-10 flex flex-col">
              <div className="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center mb-8">
                <Cpu className="w-10 h-10 text-blue-700" />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Personal Buyer
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Purchase microchips and electronics in smaller quantities for
                learning, prototyping, research, or individual development
                projects.
              </p>

              {/* FEATURES */}
              <div className="space-y-4 mb-10">
                {[
                  "Small quantity orders",
                  "Fast checkout experience",
                  "Student & developer friendly",
                  "AI-powered chip search",
                  "Wishlist & saved products",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href="/register/personal"
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-3 text-lg"
                >
                  Continue as Personal Buyer
                  <ArrowRight size={22} />
                </Link>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Best for students, makers & developers
                </p>
              </div>
            </div>

            {/* BUSINESS */}
            <div className="bg-white rounded-3xl border-2 border-[#f59e0b] shadow-xl p-10 flex flex-col relative overflow-hidden">
              {/* TAG */}
              <div className="absolute top-0 right-0 bg-[#f59e0b] text-black font-bold px-6 py-2 rounded-bl-2xl">
                BUSINESS
              </div>

              <div className="w-20 h-20 rounded-2xl bg-orange-100 flex items-center justify-center mb-8">
                <Building2 className="w-10 h-10 text-orange-600" />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Enterprise Buyer
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Built for organizations, procurement teams, manufacturers and
                startups purchasing components in bulk quantities.
              </p>

              {/* FEATURES */}
              <div className="space-y-4 mb-10">
                {[
                  "Bulk procurement workflows",
                  "GST invoices & tax support",
                  "RFQ & supplier quotations",
                  "Dedicated admin approvals",
                  "Business analytics dashboard",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href="/register/business"
                  className="w-full bg-[#f59e0b] hover:bg-[#d97706] transition-all duration-300 text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-3 text-lg"
                >
                  Continue as Business
                  <ArrowRight size={22} />
                </Link>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Ideal for procurement & enterprise teams
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER TEXT */}
          <div className="mt-16 text-center">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}