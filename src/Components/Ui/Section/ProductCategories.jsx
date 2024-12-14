import React from "react";
import { FaLaptop } from "react-icons/fa";
import { BsPcDisplay } from "react-icons/bs";
import { FaHeadset, FaMobile } from "react-icons/fa6";
import { IoTv, IoWatchSharp } from "react-icons/io5";
import SectionHeader from "../../utils/SectionHeader";

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
    <section className="py-8 md:py-12">
      <div className="container">
        <SectionHeader title={"Product Categories"} />
        <div className="flex md:px-4 gap-10 overflow-x-auto py-2">
          {categories.map((data) => (
            <a
              href={data.url}
              className="flex flex-col items-center text-center"
            >
              <div className="rounded-full border-black p-5 border-2 mb-2">
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
