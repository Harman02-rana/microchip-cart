"use client";

import Link from "next/link";

import {
  User,
  LogOut,
  LayoutDashboard,
  Settings,
  ShoppingBag,
} from "lucide-react";

import { useRouter } from "next/navigation";

export default function UserDropdown() {

  const router = useRouter();

  const role =
    typeof window !== "undefined"
      ? localStorage.getItem("mc_role")
      : null;

  function handleLogout() {

  localStorage.removeItem(
    "mc_role"
  );

  window.location.href = "/";
}

  return (
    <div className="relative group">

      {/* BUTTON */}

      <button
        className="
          flex h-12 w-12
          items-center justify-center
          rounded-2xl
          border border-white/10
          bg-white/5
          text-white
          transition-all
          hover:bg-white/10
        "
      >

        <User size={20} />

      </button>

      {/* MENU */}

      <div
        className="
          invisible absolute
          right-0 top-16
          w-64
          rounded-2xl
          border border-white/10
          bg-[#081225]
          opacity-0
          transition-all
          duration-200
          group-hover:visible
          group-hover:opacity-100
        "
      >

        {/* BUSINESS */}

        {role === "business" && (

          <>
            <Link
              href="/business/dashboard"
              className="
                flex items-center gap-3
                border-b border-white/5
                px-5 py-4
                text-white
                hover:bg-white/5
              "
            >

              <LayoutDashboard size={18} />

              Dashboard

            </Link>

            <Link
              href="/business/dashboard"
              className="
                flex items-center gap-3
                border-b border-white/5
                px-5 py-4
                text-white
                hover:bg-white/5
              "
            >

              <ShoppingBag size={18} />

              Inventory

            </Link>
          </>
        )}

        {/* PERSONAL */}

        {role !== "business" && (

          <>
            <Link
              href="/orders"
              className="
                flex items-center gap-3
                border-b border-white/5
                px-5 py-4
                text-white
                hover:bg-white/5
              "
            >

              <ShoppingBag size={18} />

              Orders

            </Link>

            <Link
              href="/settings"
              className="
                flex items-center gap-3
                border-b border-white/5
                px-5 py-4
                text-white
                hover:bg-white/5
              "
            >

              <Settings size={18} />

              Settings

            </Link>
          </>
        )}

        {/* LOGOUT */}

        <button
          onClick={handleLogout}
          className="
            flex w-full
            items-center gap-3
            px-5 py-4
            text-left
            text-red-400
            hover:bg-red-500/10
          "
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </div>
  );
}