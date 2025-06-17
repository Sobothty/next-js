import { ProductCard } from "@/components/product/ProductCard";
import { product } from "@/data/productData";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <div className="bg-[#f5f5f5f5] dark:bg-gray-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-7 space-x-4">
        {product.map((item) => (
          <Link href={`/product/${item.id}`} key={item.id}>
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              slug={item.slug}
              description={item.description}
              category={item.category}
              image_url={item.image_url}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default page;
