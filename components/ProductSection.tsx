"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { supabase } from "../lib/supabase";
import { Product } from "../types/product";
import { useSearch } from "../context/SearchContext";

export default function ProductSection() {

  const [products, setProducts] = useState<Product[]>([]);

  const { search } = useSearch();
const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
);
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {

    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (!error && data) {
      setProducts(data);
    }
  }

  return (
    <section className="py-24">

      <div className="container-custom">

        <div className="mb-14 flex items-center justify-between">

          <div>

            <p className="mb-2 font-medium text-blue-500">
              PRODUCTS
            </p>

            <h2 className="text-5xl font-bold">
              Featured Components
            </h2>

          </div>

        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

          {filteredProducts.map((product) => (

           <ProductCard
  key={product.id}
  name={product.name}
  price={product.price}
  image={product.image}
  category={product.category}
/>

          ))}

        </div>

      </div>

    </section>
  );
}