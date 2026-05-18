"use client";

import { useAuth } from "@/context/AuthContext";

export default function BulkDashboardPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black mb-4">
          Bulk Buyer Dashboard
        </h1>

        <p className="text-zinc-400 text-xl mb-12">
          Welcome {user?.email}
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-4">
              RFQs
            </h2>

            <p className="text-zinc-400">
              Request quotations for large semiconductor orders.
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-4">
              Bulk Orders
            </h2>

            <p className="text-zinc-400">
              Manage enterprise-level purchases.
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-4">
              Supplier Network
            </h2>

            <p className="text-zinc-400">
              Connect directly with verified chip suppliers.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}