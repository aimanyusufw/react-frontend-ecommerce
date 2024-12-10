import React from "react";
import { ProductCard } from "../Cards/ProductCard";

export default function NewReleaseProducts() {
  const products = [
    {
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      category: "Smart Watch",
      img: "https://images.samsung.com/is/image/samsung/p6pim/id/sm-r861nzkaxse/gallery/id-galaxy-watch-fe-r861-sm-r861nzkaxse-thumb-542345719?$344_344_PNG$",
      price: "Rp 500 ribu",
    },
    {
      title: "ASUS TUF GAMING A16",
      category: "Laptop",
      img: "https://dlcdnwebimgs.asus.com/gain/d5e3167c-efa8-46ce-bd78-65a4e99af3f6/w800",
      price: "Rp 14 juta",
    },
    {
      title: "Iphone 15 128Gb",
      category: "Phone",
      img: "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_1.jpg&w=3840&q=45",
      price: "Rp 12 juta",
    },
    {
      title:
        "Mac Mini 2020 – Apple M1 Chip with 8-Core CPU and 8-Core GPU 512GB Storage",
      category: "PC",
      img: "https://macstore.id/wp-content/uploads/2021/01/mac-mini-202011-gallery-3-1.jpeg",
      price: "Rp 9 juta",
    },
  ];

  return (
    <section className="py-12">
      <div className="container">
        <div className="px-4 mb-6 md:mb-8">
          <h1 className="ps-4 border-l-4 border-black font-semibold text-xl">
            New Product
          </h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-5 flex-wrap">
          {products.map((data) => (
            <ProductCard data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
