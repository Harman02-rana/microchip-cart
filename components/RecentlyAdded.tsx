import ProductCard from "./ProductCard";

const recentProducts = [
  {
    title: "Apple M4 AI Chip",
    category: "Mobile Processor",
    price: "$7,999",
    stock: "New Arrival",
  },

  {
    title: "NVIDIA DGX Module",
    category: "AI Hardware",
    price: "$42,000",
    stock: "Limited Units",
  },

  {
    title: "ARM Cortex Board",
    category: "Development Board",
    price: "$1,499",
    stock: "Ready to Ship",
  },

  {
    title: "Broadcom Networking IC",
    category: "Networking",
    price: "$3,299",
    stock: "Enterprise Stock",
  },
];

export default function RecentlyAdded() {
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
            Recently Added
          </h2>

          <p className="
            mt-3
            text-gray-400
          ">
            Latest semiconductor inventory
            added by verified suppliers
          </p>
        </div>

        <button className="
          rounded-xl
          border border-white/10
          px-5 py-3
          text-white
          hover:bg-white/5
        ">
          Explore Inventory
        </button>
      </div>

      {/* GRID */}

      <div className="
        grid gap-6
        sm:grid-cols-2
        xl:grid-cols-4
      ">

        {recentProducts.map((product) => (
          <ProductCard
            key={product.title}
            {...product}
          />
        ))}
      </div>
    </section>
  );
}