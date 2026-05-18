"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ShoppingCart,
  Package,
  User,
} from "lucide-react";

export default function Navbar() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!search.trim()) return;

    router.push(
      `/products?search=${encodeURIComponent(search)}`
    );
  };

  return (
    <nav className="w-full bg-black border-b border-blue-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-6">
        
        {/* LOGO */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-white text-4xl font-extrabold tracking-tight">
            MICROCHIP
          </span>

          <span className="text-blue-500 text-4xl font-extrabold tracking-tight">
            CART
          </span>
        </Link>

        {/* SEARCH BAR */}
        <div className="hidden md:flex flex-1 max-w-xl items-center bg-[#050b1f] border border-blue-700 rounded-2xl px-4 py-3">
          <input
            type="text"
            placeholder="Search microchips, processors, ICs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
          />

          <button onClick={handleSearch}>
            <Search className="text-blue-500 cursor-pointer hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6 text-white">
          <Link
            href="/products"
            className="hover:text-blue-400 transition"
          >
            Products
          </Link>

          <Link
            href="/cart"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <ShoppingCart size={20} />
            <span>Cart</span>
          </Link>

          <Link
            href="/orders"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Package size={20} />
            <span>Orders</span>
          </Link>

          <Link
            href="/login/personal"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <User size={20} />
            <span>Login</span>
          </Link>

          <Link
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl font-semibold"
          >
            Register
          </Link>
        </div>
      </div>

      {/* MOBILE SEARCH */}
      <div className="md:hidden px-4 pb-4">
        <div className="flex items-center bg-[#050b1f] border border-blue-700 rounded-2xl px-4 py-3">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
          />

          <button onClick={handleSearch}>
            <Search className="text-blue-500" />
          </button>
        </div>
      </div>
    </nav>
  );
}