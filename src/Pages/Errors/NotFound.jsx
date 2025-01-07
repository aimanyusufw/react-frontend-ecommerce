import React from "react";
import BaseLayouts from "../../Layouts/BaseLayouts";

const NotFound = () => {
  return (
    <BaseLayouts>
      <section className="min-h-[90vh] flex justify-center items-center">
        <div className="md:px-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 md:mb-12">
            (╥﹏╥)
          </h1>
          <h1 className="text-center text-lg md:text-xl font-medium">
            Your Page Is Not Found{" "}
            <span className="block text-sm">Error Code : 404</span>
          </h1>
        </div>
      </section>
    </BaseLayouts>
  );
};

export default NotFound;
