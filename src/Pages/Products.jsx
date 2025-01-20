import React from "react";
import BaseLayouts from "../Layouts/BaseLayouts";
import { categories, products } from "../dummy/data";
import { ProductCard } from "../Components/Ui/Cards/ProductCard";

export default function Products() {
  return (
    <BaseLayouts>
      <section className="min-h-screen py-8 md:py-12">
        <div className="container">
          <div className="md:px-4 mb-4 md:mb-8">
            <h1 className="font-semibold text-xl md:text-3xl mb-2">
              Products Results
            </h1>
            <p className="font-medium text-gray-600 text-xs md:text-sm">
              Showing 1 - 60 Products
            </p>
          </div>
          <div className="md:px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="border px-4 py-6 md:px-6 md:py-8 rounded-md ">
              <h1 className="font-semibold text-lg md:text-xl mb-6">
                Fillter Option
              </h1>
              <hr />
              <div className="border-b py-5 gap-4 flex flex-col">
                <h1 className="font-medium text-lg md:text-xl mb-4 md:mb-2">
                  Category
                </h1>
                {categories.map((product, i) => (
                  <div className="flex gap-4">
                    <input
                      className="rounded-sm w-4 h-4"
                      type="checkbox"
                      id={`category-${i}`}
                    />
                    <label
                      htmlFor={`category-${i}`}
                      className="text-sm font-medium cursor-pointer text-neutral-600"
                    >
                      {product.name}
                    </label>
                  </div>
                ))}
              </div>
              <div className="border-b py-5 gap-4 flex flex-col">
                <h1 className="font-medium text-lg md:text-xl mb-4 md:mb-2">
                  Price
                </h1>
                <div class="relative mb-2">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    Rp
                  </div>
                  <input
                    type="number"
                    id="input-group-1"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Minimum"
                  />
                </div>
                <div class="relative mb-2">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    Rp
                  </div>
                  <input
                    type="number"
                    id="input-group-1"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Maximum"
                  />
                </div>
                <button className="px-4 py-1 border rounded-full">
                  Rp.0-Rp. 100.000
                </button>
                <button className="px-4 py-1 border rounded-full">
                  Rp.100.000-Rp. 1.000.000
                </button>
                <button className="px-4 py-1 border rounded-full">
                  Rp.1.000.000+
                </button>
              </div>
            </div>
            <div className="md:col-span-2 lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-2 p-4">
              {products.map((data) => (
                <ProductCard data={data} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </BaseLayouts>
  );
}
