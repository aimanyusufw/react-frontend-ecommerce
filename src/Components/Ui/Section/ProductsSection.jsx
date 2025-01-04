import React from "react";
import { ProductCard } from "../Cards/ProductCard";

export default function ProductsSection({ title, data }) {
  return (
    <section className="py-2 md:py-8">
      <div className="container">
        <div className="md:px-4 mb-6 md:mb-8">
          <h1 className="ps-4 border-l-4 border-black font-bold text-base md:text-xl lg:text-2xl">
            {title ?? "Unilited Section"}
          </h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-4 gap-2 flex-wrap">
          {data.map((data, i) => (
            <ProductCard key={i} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
