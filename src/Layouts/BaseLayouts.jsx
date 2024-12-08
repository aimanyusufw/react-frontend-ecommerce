import React from "react";
import Footer from "../Components/Ui/Section/Footer";
import Navbar from "../Components/Ui/Section/Navbar";

const BaseLayouts = ({ children, isFooterHide = false }) => {
  return (
    <>
      <Navbar />
      <div className="w-1/2">{children}</div>
      {!isFooterHide && <Footer />}
    </>
  );
};

export default BaseLayouts;
