import React from "react";
import BaseLayouts from "./BaseLayouts";

const TransactionLayout = ({ heading, subHeading, children }) => {
  return (
    <BaseLayouts>
      <section className="min-h-screen">
        <div className="container">
          <div className="md:px-4 py-4 md:py-12">
            <h1 className="font-semibold text-xl md:text-3xl mb-2">
              {heading ? heading : "Default Heading"}
            </h1>
            <p className="font-medium text-gray-600 text-xs md:text-sm">
              {subHeading ? subHeading : "Default Sub Heading"}
            </p>
          </div>
          <div className="md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {children}
          </div>
        </div>
      </section>
    </BaseLayouts>
  );
};

TransactionLayout.Left = ({ children }) => {
  return (
    <div className="lg:col-span-2 ">
      <div className="border px-4 py-6 md:px-6 md:py-8 rounded-md ">
        {children}
      </div>
    </div>
  );
};

TransactionLayout.Right = ({ children }) => {
  return (
    <div>
      <div className="border bg-white px-4 py-6 md:px-6 md:py-8 rounded-md md:sticky top-5">
        {children}
      </div>
    </div>
  );
};

export default TransactionLayout;
