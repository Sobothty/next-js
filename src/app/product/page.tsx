import { ProductCard } from "@/components/product/ProductCard";
import { getAllProducts } from "../services/product";
import React from "react";
import Link from "next/link";

export default async function page() {
  const data = await getAllProducts();
  return (
    <section>
      <div className="bg-[#f5f5f5f5] dark:bg-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-7 space-x-4 space-y-4">
        {data.map((item : any) => (
          <Link href={`/product/${item.id}`} key={item.id}>
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              brand={item.brand}
              description={item.description}
              category={item.category}
              images={item.thumbnail}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
