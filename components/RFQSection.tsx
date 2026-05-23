import Link from "next/link";

export default function RFQSection() {
  return (
    <section className="mt-24">

      <div className="
        rounded-[32px]
        border border-cyan-400/20
        bg-gradient-to-r
        from-cyan-400/10
        to-blue-500/10
        p-10
      ">

        <div className="
          flex flex-col gap-8
          lg:flex-row
          lg:items-center
          lg:justify-between
        ">

          <div className="max-w-2xl">

            <p className="mb-4 text-cyan-400 font-semibold">
              ENTERPRISE PROCUREMENT
            </p>

            <h2 className="text-5xl font-black text-white leading-tight">
              Need Bulk Pricing
              or Supplier Quotes?
            </h2>

            <p className="mt-6 text-lg text-gray-300">
              Submit RFQs for processors,
              GPUs, microcontrollers,
              and semiconductor inventory
              directly from verified suppliers.
            </p>
          </div>

          <div className="flex gap-4">

            <Link
              href="/auth/business/register"
              className="
                rounded-2xl
                bg-cyan-400
                px-8 py-4
                font-bold text-black
                hover:bg-cyan-300
              "
            >
              Become Supplier
            </Link>

            <Link
              href="/products"
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                px-8 py-4
                font-bold text-white
                hover:bg-white/10
              "
            >
              Browse Inventory
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}