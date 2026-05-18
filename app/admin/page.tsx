"use client";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* SIDEBAR */}
      <div className="flex">
        <div className="w-[260px] min-h-screen bg-slate-950 border-r border-slate-800 p-6">
          <h1 className="text-3xl font-bold mb-10">
            Admin Panel
          </h1>

          <div className="space-y-4">
            <button className="w-full text-left bg-slate-800 px-4 py-3 rounded-xl">
              Dashboard
            </button>

            <button className="w-full text-left hover:bg-slate-800 px-4 py-3 rounded-xl">
              Users
            </button>

            <button className="w-full text-left hover:bg-slate-800 px-4 py-3 rounded-xl">
              Products
            </button>

            <button className="w-full text-left hover:bg-slate-800 px-4 py-3 rounded-xl">
              Suppliers
            </button>

            <button className="w-full text-left hover:bg-slate-800 px-4 py-3 rounded-xl">
              Analytics
            </button>
          </div>
        </div>

        {/* MAIN */}
        <div className="flex-1 p-10">
          <h2 className="text-5xl font-bold mb-10">
            System Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="text-slate-400">
                Total Users
              </h3>

              <p className="text-4xl font-bold mt-4">
                14,289
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="text-slate-400">
                Businesses
              </h3>

              <p className="text-4xl font-bold mt-4">
                1,209
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="text-slate-400">
                Products
              </h3>

              <p className="text-4xl font-bold mt-4">
                82,991
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6">
              <h3 className="text-slate-400">
                Revenue
              </h3>

              <p className="text-4xl font-bold mt-4">
                ₹4.2Cr
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}