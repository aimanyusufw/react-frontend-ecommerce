"use client";

import { HiShoppingCart } from "react-icons/hi";

export function ProductCard({ data }) {
  return (
    <div className="border rounded-lg shadow-sm px-4 py-6">
      <a href="#">
        <div className="h-44 md:h-56 lg:h-64 relative mb-4">
          <img
            src={
              data.img ??
              "https://images.samsung.com/is/image/samsung/p6pim/id/sm-r861nzkaxse/gallery/id-galaxy-watch-fe-r861-sm-r861nzkaxse-thumb-542345719?$344_344_PNG$"
            }
            alt=""
            className="h-full self-center"
          />
          <span className="absolute bottom-2 text-sm bg-red-200 bg-opacity-50 left-2 px-2 py-1 rounded-md border border-red-500 text-red-500">
            New
          </span>
          <button className="absolute top-1 text-sm bg-slate-200 bg-opacity-50 right-1 p-2  rounded-md border border-slate-500 text-slate-500">
            <HiShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </a>
      <span className="bg-slate-500  text-white px-4 py-2 rounded-full text-sm font-medium">
        {data.category ?? "Uncategorize"}
      </span>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-5 line-clamp-2">
          {data.title ?? "Unilited Products"}
        </h5>
      </a>
      <div className="flex items-center justify-between mt-5">
        <span className="text-3xl font-semibold text-gray-900 dark:text-white">
          {data.price ?? "Rp -"}
        </span>
      </div>
    </div>
  );
}
