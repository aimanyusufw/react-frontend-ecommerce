import React from "react";
import { FaLaptop } from "react-icons/fa";
import { BsPcDisplay } from "react-icons/bs";
import { FaHeadset, FaMobile } from "react-icons/fa6";
import { IoTv, IoWatchSharp } from "react-icons/io5";

export default function ProductCategories() {
  const categories = [
    { name: "Laptop", url: "#", image: <FaLaptop className="w-5 h-5" /> },
    {
      name: "PC",
      url: "#",
      image: <BsPcDisplay className="w-5 h-5" />,
    },
    { name: "Phone", url: "#", image: <FaMobile className="w-5 h-5" /> },
    {
      name: "Smart Watch",
      url: "#",
      image: <IoWatchSharp className="w-5 h-5" />,
    },
    { name: "Television", url: "#", image: <IoTv className="w-5 h-5" /> },
    { name: "Headset", url: "#", image: <FaHeadset className="w-5 h-5" /> },
  ];

  return (
    <section className="py-12">
      <div className="container">
        <div className="px-4 mb-6 md:mb-8">
          <h1 className="ps-4 border-l-4 border-black font-semibold text-xl">
            Product Categories
          </h1>
        </div>
        <div className="flex px-4 gap-10 flex-wrap">
          {categories.map((data) => (
            <a
              href={data.url}
              className="flex flex-col items-center text-center"
            >
              <div className="rounded-full border-black p-5 border mb-2">
                {data.image}
              </div>
              <h4 className="text-sm md:text-base font-medium break-words">
                {data.name}
              </h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
