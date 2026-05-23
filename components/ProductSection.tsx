import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";

const products = [
  {
    title: "NVIDIA H100 GPU",
    category: "AI Accelerator",
    price: "$24,999",
    stock: "Bulk Available",
  },

  {
    title: "AMD EPYC 9654",
    category: "Server CPU",
    price: "$11,200",
    stock: "Enterprise Stock",
  },

  {
    title: "Intel Xeon Max",
    category: "Data Center CPU",
    price: "$8,499",
    stock: "Ready to Ship",
  },

  {
    title: "FPGA Dev Board",
    category: "Development",
    price: "$1,299",
    stock: "Limited Units",
  },
];

export default function ProductSection() {

  const loading = false;
  return (
    <section className="mt-20">

      <div className="mb-10 flex items-center justify-between">

        <div>
          <h2 className="text-4xl font-bold text-white">
            Featured Products
          </h2>

          <p className="mt-2 text-gray-400">
            Trending semiconductor inventory
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

      <div
  className="
    grid gap-6
    sm:grid-cols-2
    xl:grid-cols-4
  "
>

  {loading
    ? Array.from({ length: 4 }).map(
        (_, index) => (
          <SkeletonCard
            key={index}
          />
        )
      )

    : products.map((product) => (
        <ProductCard
          key={product.title}
          {...product}
        />
      ))}

</div>
    </section>
  );
}