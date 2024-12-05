import React from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

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
