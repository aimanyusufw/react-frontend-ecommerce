import React from "react";
import { categories } from "../../../dummy/data";

export default function ProductCategories() {
  return (
    <section className="py-2 md:py-8">
      <div className="container">
        <div className="md:px-4 mb-6 md:mb-8">
          <h1 className="ps-4 border-l-4 border-black font-bold text-base md:text-xl lg:text-2xl">
            Product Categories
          </h1>
        </div>
        <div className="flex md:px-4 gap-10 overflow-x-auto py-2">
          {categories.map((data) => (
            <a
              key={data.name}
              href={data.url}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden p-2 group">
                <img
                  src={data.image || "https://via.placeholder.com/40"}
                  alt={data.alt || "User profile"}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xs md:text-base font-medium break-words">
                {data.name}
              </h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
