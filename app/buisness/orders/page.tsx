export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-6xl font-black mb-6">
          Order Tracking
        </h1>

        <p className="text-zinc-400 text-xl mb-12">
          Track all semiconductor shipments and enterprise orders.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <div className="flex items-center justify-between border-b border-zinc-800 pb-6 mb-6">

            <div>
              <div className="text-zinc-500 text-sm">
                ORDER ID
              </div>

              <div className="text-2xl font-bold">
                MC-2048X
              </div>
            </div>

            <div className="text-green-400 font-bold text-xl">
              In Transit
            </div>

          </div>

          <div className="space-y-4 text-zinc-300">

            <div>
              ✅ Order Confirmed
            </div>

            <div>
              ✅ Supplier Packed Product
            </div>

            <div>
              🚚 Shipment In Transit
            </div>

            <div>
              📦 Delivery Pending
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}