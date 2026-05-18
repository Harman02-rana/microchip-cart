"use client";

import Link from "next/link";

import {
  Search,
  ShoppingCart,
  PackageCheck,
  LayoutDashboard,
  LogOut,
  User,
} from "lucide-react";

import { useRouter } from "next/navigation";

import { useCart } from "@/context/CartContext";

import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const router = useRouter();

  const { cart } = useCart();

  const { user, logout } =
    useAuth();

  async function handleLogout() {
    await logout();

    router.push("/");
  }

  return (
    <nav className="w-full bg-black border-b border-blue-950 sticky top-0 z-50">

      <div className="w-full px-10 h-24 flex items-center">

        {/* LOGO */}

        <Link
          href="/"
          className="flex items-center mr-12"
        >
          <h1 className="text-5xl font-black tracking-tight text-white">

            MICROCHIP{" "}

            <span className="text-blue-500">
              CART
            </span>

          </h1>
        </Link>

        {/* SEARCH BAR */}

        <div className="hidden lg:flex w-[520px] mr-auto">

          <div className="relative w-full">

            <input
              type="text"
              placeholder="Search microchips, processors, ICs..."
              className="w-full bg-[#050B18] border border-blue-900/40 text-white rounded-2xl py-3 pl-5 pr-14 outline-none focus:border-blue-500 transition"
            />

            <Search
              size={20}
              className="absolute right-5 top-3.5 text-blue-300"
            />

          </div>

        </div>

        {/* NAV LINKS */}

        <div className="flex items-center gap-8 text-white ml-10">

          <Link
            href="/products"
            className="hover:text-blue-400 transition font-medium"
          >
            Products
          </Link>

          <Link
            href="/cart"
            className="hover:text-blue-400 transition flex items-center gap-2 font-medium"
          >
            <ShoppingCart size={18} />

            Cart

            <span className="text-blue-400">
              ({cart.length})
            </span>
          </Link>

          <Link
            href="/orders"
            className="hover:text-blue-400 transition flex items-center gap-2 font-medium"
          >
            <PackageCheck size={18} />

            Orders
          </Link>

          {/* USER LOGGED IN */}

          {user ? (
            <>
              <Link
                href="/dashboard"
                className="hover:text-blue-400 transition flex items-center gap-2 font-medium"
              >
                <LayoutDashboard
                  size={18}
                />

                Dashboard
              </Link>

              <button
                onClick={
                  handleLogout
                }
                className="bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl transition font-semibold flex items-center gap-2"
              >
                <LogOut size={17} />

                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login/personal"
                className="hover:text-blue-400 transition flex items-center gap-2 font-medium"
              >
                <User size={18} />

                Login
              </Link>

              <Link
                href="/register/personal"
                className="bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-xl transition font-semibold"
              >
                Register
              </Link>
            </>
          )}

        </div>

      </div>

    </nav>
  );
}