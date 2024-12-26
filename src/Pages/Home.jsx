import React from "react";
import BaseLayouts from "../Layouts/BaseLayouts";
import { Carousel } from "flowbite-react";
import ProductCategories from "../Components/Ui/Section/ProductCategories";
import ProductsSection from "../Components/Ui/Section/ProductsSection";

const Home = () => {
  const products = [
    {
      title: "ASUS TUF GAMING A16",
      category: "Laptop",
      img: "https://dlcdnwebimgs.asus.com/gain/d5e3167c-efa8-46ce-bd78-65a4e99af3f6/w800",
      salePrice: "Rp 14.000.000,00",
    },
    {
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      category: "Smart Watch",
      img: "https://images.samsung.com/is/image/samsung/p6pim/id/sm-r861nzkaxse/gallery/id-galaxy-watch-fe-r861-sm-r861nzkaxse-thumb-542345719?$344_344_PNG$",
      salePrice: "Rp 500.000,00",
    },
    {
      title:
        "Mac Mini 2020 – Apple M1 Chip with 8-Core CPU and 8-Core GPU 512GB Storage",
      category: "PC",
      img: "https://macstore.id/wp-content/uploads/2021/01/mac-mini-202011-gallery-3-1.jpeg",
      salePrice: "Rp 9.000.000,00",
    },
    {
      title: "Iphone 15 128Gb",
      category: "Phone",
      img: "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_1.jpg&w=3840&q=45",
      price: "Rp 12.000.000,00",
      salePrice: "Rp 10.990.000,00",
    },
  ];
  const productsDis = [
    {
      title: "ASUS TUF GAMING A16",
      category: "Laptop",
      img: "https://dlcdnwebimgs.asus.com/gain/d5e3167c-efa8-46ce-bd78-65a4e99af3f6/w800",
      price: "Rp 16.000.000,00",
      salePrice: "Rp 14.000.000,00",
    },
    {
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      category: "Smart Watch",
      img: "https://images.samsung.com/is/image/samsung/p6pim/id/sm-r861nzkaxse/gallery/id-galaxy-watch-fe-r861-sm-r861nzkaxse-thumb-542345719?$344_344_PNG$",
      price: "Rp 800.000,00",
      salePrice: "Rp 500.000,00",
    },
    {
      title:
        "Mac Mini 2020 – Apple M1 Chip with 8-Core CPU and 8-Core GPU 512GB Storage",
      category: "PC",
      img: "https://macstore.id/wp-content/uploads/2021/01/mac-mini-202011-gallery-3-1.jpeg",
      price: "Rp 9.000.000,00",
      salePrice: "Rp 8.000.000,00",
    },
    {
      title: "Iphone 15 128Gb",
      category: "Phone",
      img: "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_1.jpg&w=3840&q=45",
      price: "Rp 12.000.000,00",
      salePrice: "Rp 10.990.000,00",
    },
  ];

  return (
    <BaseLayouts>
      <section className="py-4">
        <div className="container">
          <div className="md:px-4 h-40 sm:h-72 lg:h-96 2xl:h-[32rem]">
            <Carousel indicators={false} pauseOnHover>
              <img
                src="Banner_2.svg"
                className="w-full"
                alt="iphone new release banner"
              />
              <img
                src="Banner_1.svg"
                className="w-full"
                alt="Smart watch banner"
              />
              <img
                src="Banner_3.svg"
                className="w-full"
                alt="Playsatation 5 best seller banner"
              />
            </Carousel>
          </div>
        </div>
      </section>
      <ProductCategories />
      <ProductsSection title={"New Release Products"} data={products} />
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="md:px-4">
            <a href="/products">
              <img src="Banner_3.svg" alt="" className="w-full rounded-xl" />
            </a>
          </div>
        </div>
      </section>
      <ProductsSection title={"Discover Products"} data={products} />
      <ProductsSection title={"Promo 20% OFF"} data={productsDis} />
      <section className="py-12">
        <div className="container">
          <div className="md:px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-center items-center py-24 bg-gray-100 rounded-md border border-gray-200">
              <h1 className="mb-4 font-medium text-lg">
                Good service get happy experience
              </h1>
              <a
                href="/"
                className="px-6 py-3 rounded-full border-2 border-black font-medium text-sm"
              >
                Buy Now
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Customer and buyer"
              className="rounded-md"
            />
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Customer and buyer"
              className="rounded-md"
            />
            <div className="flex flex-col justify-center items-center py-24 bg-gray-100 rounded-md border border-gray-200">
              <h1 className="mb-4 font-medium text-lg">
                100% Warranty Original Product
              </h1>
              <a
                href="/"
                className="px-6 py-3 rounded-full border-2 border-black font-medium text-sm"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </BaseLayouts>
  );
};

export default Home;
