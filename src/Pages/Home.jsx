import React from "react";
import BaseLayouts from "../Layouts/BaseLayouts";
import { Carousel } from "flowbite-react";
import ProductCategories from "../Components/Ui/Section/ProductCategories";
import NewReleaseProducts from "../Components/Ui/Section/NewReleaseProducts";

const Home = () => {
  return (
    <BaseLayouts>
      <section className="py-4">
        <div className="container">
          <div className="md:px-4 h-40 sm:h-72 lg:h-96 2xl:h-[28rem]">
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
      <NewReleaseProducts />
    </BaseLayouts>
  );
};

export default Home;
