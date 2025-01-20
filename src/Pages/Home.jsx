import React from "react";
import BaseLayouts from "../Layouts/BaseLayouts";
import { Carousel } from "flowbite-react";
import ProductCategories from "../Components/Ui/Section/ProductCategories";
import ProductsSection from "../Components/Ui/Section/ProductsSection";
import { products, productsDis } from "../dummy/data";

const Home = () => {
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
      <ProductsSection title={"Discount Products"} data={productsDis} />
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
