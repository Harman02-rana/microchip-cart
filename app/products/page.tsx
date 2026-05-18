"use client";

import { useSearchParams } from "next/navigation";

import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Arduino Uno R3",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    category: "Microcontrollers",
  },

  {
    id: 2,
    name: "ESP32 WiFi Module",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
    category: "IoT",
  },

  {
    id: 3,
    name: "Raspberry Pi 5",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1200&auto=format&fit=crop",
    category: "Embedded Systems",
  },

  {
    id: 4,
    name: "Intel AI Processor",
    price: 8999,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "AI Chips",
  },

  {
    id: 5,
    name: "NVIDIA Jetson Nano",
    price: 12999,
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1200&auto=format&fit=crop",
    category: "AI Development",
  },

  {
    id: 6,
    name: "STM32 Development Board",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1591799265444-d66432b91588?q=80&w=1200&auto=format&fit=crop",
    category: "Embedded Systems",
  },
];

export default function ProductsPage() {

  const searchParams =
    useSearchParams();

  const searchQuery =
    searchParams
      .get("search")
      ?.toLowerCase() || "";

  const filteredProducts =
    products.filter(
      (product) =>
        product.name
          .toLowerCase()
          .includes(searchQuery) ||
        product.category
          .toLowerCase()
          .includes(searchQuery)
    );

  return (

    <main className="min-h-screen bg-[#020817] text-white px-6 py-16">

      {/* HEADER */}

      <div className="max-w-7xl mx-auto mb-14">

        <p className="text-blue-500 uppercase tracking-[0.3em] text-sm mb-4">

          Marketplace

        </p>

        <h1 className="text-5xl lg:text-7xl font-black leading-tight">

          Explore
          <span className="text-blue-500">
            {" "}
            Products
          </span>

        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg">

          Discover premium semiconductor products,
          embedded systems, AI chips and industrial
          microcontroller solutions.

        </p>

      </div>

      {/* PRODUCTS GRID */}

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredProducts.map(
          (product) => (

            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
            />

          )
        )}

      </div>

      {/* EMPTY STATE */}

      {filteredProducts.length === 0 && (

        <div className="text-center text-gray-400 py-24">

          <h2 className="text-3xl font-bold mb-4">
            No Products Found
          </h2>

          <p>
            Try searching for another product or
            category.
          </p>

        </div>

      )}

    </main>
  );
}