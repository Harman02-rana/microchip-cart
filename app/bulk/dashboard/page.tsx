export default function BusinessDashboard() {
  return (
    <div className="min-h-screen bg-[#020617] p-10 text-white">

      <h1 className="mb-6 text-5xl font-black">
        BUSINESS DASHBOARD
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="rounded-3xl border border-blue-500/20 bg-[#081120] p-8">
          <h2 className="mb-3 text-2xl font-bold">
            Inventory
          </h2>

          <p className="text-zinc-400">
            Manage semiconductor stock
          </p>
        </div>

        <div className="rounded-3xl border border-blue-500/20 bg-[#081120] p-8">
          <h2 className="mb-3 text-2xl font-bold">
            Orders
          </h2>

          <p className="text-zinc-400">
            Bulk order tracking
          </p>
        </div>

        <div className="rounded-3xl border border-blue-500/20 bg-[#081120] p-8">
          <h2 className="mb-3 text-2xl font-bold">
            GST Verification
          </h2>

          <p className="text-zinc-400">
            Business authentication panel
          </p>
        </div>

      </div>

    </div>
  );
}