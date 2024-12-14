import React from "react";
import { ProductCard } from "../Cards/ProductCard";
import SectionHeader from "../../utils/SectionHeader";

export default function NewReleaseProducts() {
  const products = [
    {
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      category: "Smart Watch",
      img: "https://images.samsung.com/is/image/samsung/p6pim/id/sm-r861nzkaxse/gallery/id-galaxy-watch-fe-r861-sm-r861nzkaxse-thumb-542345719?$344_344_PNG$",
      salePrice: "Rp 500.000,00",
    },
    {
      title: "ASUS TUF GAMING A16",
      category: "Laptop",
      img: "https://dlcdnwebimgs.asus.com/gain/d5e3167c-efa8-46ce-bd78-65a4e99af3f6/w800",
      salePrice: "Rp 14.000.000,00",
    },
    {
      title: "Iphone 15 128Gb",
      category: "Phone",
      img: "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_1.jpg&w=3840&q=45",
      price: "Rp 12.000.000,00",
      salePrice: "Rp 10.990.000,00",
    },
    {
      title:
        "Mac Mini 2020 – Apple M1 Chip with 8-Core CPU and 8-Core GPU 512GB Storage",
      category: "PC",
      img: "https://macstore.id/wp-content/uploads/2021/01/mac-mini-202011-gallery-3-1.jpeg",
      salePrice: "Rp 9.000.000,00",
    },
  ];

  return (
    <section className="py-5 md:py-12">
      <div className="container">
        <SectionHeader title={"New Products"} />
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-4 gap-2 flex-wrap">
          {products.map((data) => (
            <ProductCard data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
