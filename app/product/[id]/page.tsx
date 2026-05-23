"use client";
import Link from "next/link";

import { useCart } from "@/context/CartContext";

import toast from "react-hot-toast";

export default function ProductDetailPage() {

  const { addToCart } = useCart();

  return (
    <main className="
      min-h-screen
      bg-[#020817]
      px-6 py-10
    ">

      <div className="mx-auto max-w-7xl">

        {/* BREADCRUMB */}

        <div className="mb-8 text-sm text-gray-400">

          Home / Products / NVIDIA H100 GPU

        </div>

        {/* MAIN */}

        <div className="
          grid gap-10
          lg:grid-cols-2
        ">

          {/* IMAGE */}

          <div className="
            rounded-[32px]
            border border-white/10
            bg-[#081225]
            p-10
          ">

            <div className="
              flex h-[500px]
              items-center justify-center
              rounded-3xl
              bg-gradient-to-br
              from-cyan-400/10
              to-blue-500/10
            ">

              <div className="text-[120px]">
                💾
              </div>

            </div>
          </div>

          {/* INFO */}

          <div>

            <p className="text-cyan-400">
              AI Accelerator
            </p>

            <h1 className="
              mt-3
              text-5xl
              font-black
              text-white
            ">
              NVIDIA H100 GPU
            </h1>

            <p className="
              mt-6
              text-lg
              leading-8
              text-gray-400
            ">
              Enterprise AI accelerator
              optimized for training,
              inference,
              HPC workloads,
              and large-scale
              data center deployments.
            </p>

            {/* PRICE */}

            <div className="mt-8">

              <div className="
                flex items-end gap-4
              ">

                <h2 className="
                  text-5xl
                  font-black
                  text-white
                ">
                  $24,999
                </h2>

                <p className="
                  mb-2
                  text-gray-400
                ">
                  Bulk pricing available
                </p>
              </div>
            </div>

            {/* STOCK */}

            <div className="
              mt-8
              flex flex-wrap gap-4
            ">

              <div className="
                rounded-xl
                bg-green-500/10
                px-4 py-3
                text-green-400
              ">
                In Stock
              </div>

              <div className="
                rounded-xl
                bg-cyan-400/10
                px-4 py-3
                text-cyan-400
              ">
                Enterprise Ready
              </div>

              <div className="
                rounded-xl
                bg-white/5
                px-4 py-3
                text-gray-300
              ">
                MOQ: 10 Units
              </div>
            </div>

            {/* ACTIONS */}

            <div className="
              mt-10
              flex flex-wrap gap-4
            ">

              <button
  onClick={() => {

  addToCart({
    id: 1,
    title: "NVIDIA H100 GPU",
    price: 24999,
    quantity: 1,
  });

  toast.success(
    "Added to cart"
  );
}}
  className="
    rounded-2xl
    bg-cyan-400
    px-8 py-4
    font-bold
    text-black
    hover:bg-cyan-300
  "
>
  Add to Cart
</button>

              <button className="
                rounded-2xl
                border border-white/10
                bg-white/5
                px-8 py-4
                font-bold
                text-white
                hover:bg-white/10
              ">
                Request RFQ
              </button>
            </div>

            {/* SUPPLIER */}

            <div className="
              mt-12
              rounded-3xl
              border border-white/10
              bg-[#081225]
              p-6
            ">

              <p className="
                text-sm
                text-gray-400
              ">
                VERIFIED SUPPLIER
              </p>

              <h3 className="
                mt-2
                text-2xl
                font-bold
                text-white
              ">
                NVIDIA Enterprise Partner
              </h3>

              <p className="
                mt-4
                text-gray-400
              ">
                98% fulfillment rate
                • 12 years supplying
                enterprise semiconductor inventory.
              </p>
            </div>
          </div>
        </div>

        {/* SPECIFICATIONS */}

        <section className="mt-24">

          <h2 className="
            text-4xl
            font-black
            text-white
          ">
            Specifications
          </h2>

          <div className="
            mt-10
            overflow-hidden
            rounded-3xl
            border border-white/10
          ">

            {[
              ["Architecture", "Hopper"],
              ["Memory", "80GB HBM3"],
              ["CUDA Cores", "16896"],
              ["Power", "700W"],
              ["Interface", "PCIe Gen5"],
              ["Process", "TSMC 4N"],
            ].map(([key, value]) => (
              <div
                key={key}
                className="
                  flex justify-between
                  border-b border-white/5
                  bg-[#081225]
                  px-6 py-5
                "
              >
                <span className="text-gray-400">
                  {key}
                </span>

                <span className="text-white">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* RELATED */}

        <section className="mt-24">

          <div className="
            mb-10
            flex items-center justify-between
          ">

            <h2 className="
              text-4xl
              font-black
              text-white
            ">
              Related Products
            </h2>

            <Link
              href="/products"
              className="text-cyan-400"
            >
              View All
            </Link>
          </div>

          <div className="
            grid gap-6
            md:grid-cols-2
            xl:grid-cols-4
          ">

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="
                  rounded-3xl
                  border border-white/10
                  bg-[#081225]
                  p-5
                "
              >

                <div className="
                  flex h-40 items-center justify-center
                  rounded-2xl
                  bg-white/5
                ">
                  💾
                </div>

                <h3 className="
                  mt-5
                  text-xl
                  font-bold
                  text-white
                ">
                  AI Accelerator
                </h3>

                <p className="
                  mt-2
                  text-gray-400
                ">
                  Enterprise GPU
                </p>

                <button className="
                  mt-5
                  w-full
                  rounded-xl
                  bg-cyan-400
                  py-3
                  font-semibold
                  text-black
                ">
                  View Product
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}