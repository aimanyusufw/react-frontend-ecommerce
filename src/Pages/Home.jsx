import React from "react";
import BaseLayouts from "../Layouts/BaseLayouts";
import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <BaseLayouts>
      <section className="py-4">
        <div className="container">
          <div className="h-40 sm:h-72 lg:h-96 2xl:h-[28rem]">
            <Carousel indicators={false} pauseOnHover>
              <img
                src="Banner_1.svg"
                className="w-full"
                alt="Smart watch banner"
              />
              <img
                src="Banner_2.svg"
                className="w-full"
                alt="iphone new release banner"
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
    </BaseLayouts>
  );
};

export default Home;
