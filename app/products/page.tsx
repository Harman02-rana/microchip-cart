import ProductFilters from "@/components/ProductFilters";
import ProductSection from "@/components/ProductSection";

export default function ProductsPage() {
  return (
    <main className="
      min-h-screen
      bg-[#020817]
      px-6 py-10
    ">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-10">

          <h1 className="text-5xl font-black text-white">
            Semiconductor Marketplace
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-gray-400">
            Browse processors, GPUs,
            AI accelerators,
            microcontrollers,
            development boards,
            and enterprise semiconductor inventory.
          </p>
        </div>

        {/* CONTENT */}

        <div className="
          grid gap-8
          lg:grid-cols-[280px_1fr]
        ">

          {/* SIDEBAR */}

          <ProductFilters />

          {/* PRODUCTS */}

          <div>

            {/* TOP BAR */}

            <div className="
              mb-8
              flex items-center justify-between
            ">

              <p className="text-gray-400">
                Showing 1200+ products
              </p>

              <select
                className="
                  rounded-xl
                  border border-white/10
                  bg-[#081225]
                  px-4 py-3
                  text-white
                  outline-none
                "
              >
                <option>
                  Most Popular
                </option>

                <option>
                  Latest
                </option>

                <option>
                  Price Low to High
                </option>

                <option>
                  Price High to Low
                </option>
              </select>
            </div>

            <ProductSection />
          </div>
        </div>
      </div>
    </main>
  );
}