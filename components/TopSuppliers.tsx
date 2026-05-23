const suppliers = [
  {
    name: "NVIDIA Enterprise",
    products: "420 Products",
    rating: "4.9",
  },

  {
    name: "AMD Systems",
    products: "310 Products",
    rating: "4.8",
  },

  {
    name: "Intel Components",
    products: "510 Products",
    rating: "4.7",
  },

  {
    name: "Qualcomm Labs",
    products: "190 Products",
    rating: "4.9",
  },
];

export default function TopSuppliers() {
  return (
    <section className="mt-24">

      {/* HEADER */}

      <div className="
        mb-10
        flex items-center justify-between
      ">

        <div>

          <h2 className="
            text-4xl
            font-black
            text-white
          ">
            Top Suppliers
          </h2>

          <p className="
            mt-3
            text-gray-400
          ">
            Verified semiconductor suppliers
            trusted by enterprise buyers
          </p>
        </div>

        <button className="
          rounded-xl
          border border-white/10
          px-5 py-3
          text-white
          hover:bg-white/5
        ">
          View Suppliers
        </button>
      </div>

      {/* GRID */}

      <div className="
        grid gap-6
        sm:grid-cols-2
        xl:grid-cols-4
      ">

        {suppliers.map((supplier) => (
          <div
            key={supplier.name}
            className="
  rounded-3xl
  border border-white/10
  bg-[#081225]
  p-6
  transition-all
  hover:-translate-y-1
  hover:border-cyan-400/20
"
          >

            {/* ICON */}

            <div className="
              flex h-16 w-16
              items-center justify-center
              rounded-2xl
              bg-cyan-400/10
              text-3xl
            ">
              🏢
            </div>

            {/* INFO */}

            <h3 className="
              mt-6
              text-2xl
              font-bold
              text-white
            ">
              {supplier.name}
            </h3>

            <p className="
              mt-3
              text-gray-400
            ">
              {supplier.products}
            </p>

            {/* FOOTER */}

            <div className="
              mt-6
              flex items-center justify-between
            ">

              <span className="
                rounded-full
                bg-green-500/10
                px-4 py-2
                text-sm
                text-green-400
              ">
                Verified
              </span>

              <span className="
                text-cyan-400
                font-bold
              ">
                ⭐ {supplier.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}