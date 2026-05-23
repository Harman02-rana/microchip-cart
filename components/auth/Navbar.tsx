"use client";

import Link from "next/link";

import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Cpu,
} from "lucide-react";

import { useState } from "react";

const searchSuggestions = [
  "Intel i9 Processor",
  "AMD EPYC Server CPU",
  "NVIDIA H100 GPU",
  "AI Accelerator Chips",
  "FPGA Development Board",
  "ARM Microcontroller",
];

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] =
    useState(false);

  const filteredSuggestions =
    searchSuggestions.filter((item) =>
      item
        .toLowerCase()
        .includes(query.toLowerCase())
    );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/95 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-6">

        {/* LOGO */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-black">
            <Cpu size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-black text-white leading-none">
              MicroCart
            </h1>

            <p className="text-[10px] tracking-[0.3em] text-cyan-400">
              CHIP MARKETPLACE
            </p>
          </div>
        </Link>

        {/* SEARCH */}

        <div className="relative flex-1">

          <div className="flex h-14 overflow-hidden rounded-2xl border border-white/10 bg-[#081225]">

            <div className="flex items-center px-4 text-gray-400">
              <Search size={20} />
            </div>

            <input
              type="text"
              placeholder="Search processors, GPUs, ICs..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() =>
                setShowDropdown(true)
              }
              className="flex-1 bg-transparent px-2 text-white outline-none"
            />

            <button
              className="bg-cyan-400 px-6 font-semibold text-black hover:bg-cyan-300"
            >
              Search
            </button>
          </div>

          {/* LIVE SEARCH DROPDOWN */}

          {showDropdown &&
            query.length > 0 && (
              <div className="absolute mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#081225] shadow-2xl">

                {filteredSuggestions.length >
                0 ? (
                  filteredSuggestions.map(
                    (item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setQuery(item);
                          setShowDropdown(
                            false
                          );
                        }}
                        className="flex w-full items-center gap-3 border-b border-white/5 px-4 py-4 text-left text-white hover:bg-white/5"
                      >
                        <Search size={16} />

                        {item}
                      </button>
                    )
                  )
                ) : (
                  <div className="px-4 py-4 text-gray-400">
                    No products found
                  </div>
                )}
              </div>
            )}
        </div>

        {/* NAV LINKS */}

        <nav className="hidden items-center gap-6 lg:flex">

          <Link
            href="/products"
            className="text-gray-300 hover:text-white"
          >
            Products
          </Link>

          <Link
            href="/cart"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <ShoppingCart size={18} />
            Cart
          </Link>
        </nav>

        {/* AUTH PORTAL */}

        <div className="group relative">

          <button
            className="flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 text-white hover:bg-white/10"
          >
            <User size={18} />

            Portal

            <ChevronDown size={16} />
          </button>

          {/* DROPDOWN */}

          <div className="invisible absolute right-0 top-14 w-56 rounded-2xl border border-white/10 bg-[#081225] opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">

            <Link
              href="/auth/login"
              className="block border-b border-white/5 px-5 py-4 text-white hover:bg-white/5"
            >
              Personal Login
            </Link>

            <Link
              href="/auth/register"
              className="block border-b border-white/5 px-5 py-4 text-white hover:bg-white/5"
            >
              Personal Register
            </Link>

            <Link
              href="/auth/business/login"
              className="block border-b border-white/5 px-5 py-4 text-white hover:bg-white/5"
            >
              Business Login
            </Link>

            <Link
              href="/auth/business/register"
              className="block border-b border-white/5 px-5 py-4 text-white hover:bg-white/5"
            >
              Become Supplier
            </Link>

            <Link
              href="/dashboard"
              className="block px-5 py-4 text-cyan-400 hover:bg-white/5"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}