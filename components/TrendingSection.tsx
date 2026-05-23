import ProductCard from "./ProductCard";

const trendingProducts = [
  {
    title: "NVIDIA Blackwell B200",
    category: "AI GPU",
    price: "$34,999",
    stock: "Trending",
  },

  {
    title: "Intel Gaudi 3",
    category: "AI Accelerator",
    price: "$18,400",
    stock: "Enterprise Stock",
  },

  {
    title: "AMD Instinct MI300",
    category: "HPC GPU",
    price: "$21,999",
    stock: "Bulk Available",
  },

  {
    title: "Qualcomm AI Edge",
    category: "Edge Processor",
    price: "$4,999",
    stock: "Ready to Ship",
  },
];

export default function TrendingSection() {
  return (
    <section className="mt-24">

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
            Trending Inventory
          </h2>

          <p className="
            mt-3
            text-gray-400
          ">
            Most viewed semiconductor products
          </p>
        </div>

        <button className="
          rounded-xl
          border border-white/10
          px-5 py-3
          text-white
          hover:bg-white/5
        ">
          View All
        </button>
      </div>

      <div className="
        grid gap-6
        sm:grid-cols-2
        xl:grid-cols-4
      ">

        {trendingProducts.map((product) => (
          <ProductCard
            key={product.title}
            {...product}
          />
        ))}
      </div>
    </section>
  );
}