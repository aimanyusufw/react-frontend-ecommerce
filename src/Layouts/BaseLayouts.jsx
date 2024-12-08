import React from "react";
import Footer from "../Components/Ui/Section/Footer";
import NavbarComp from "../Components/Ui/Section/Navbar";

const BaseLayouts = ({ children, isFooterHide = false }) => {
  return (
    <>
      <NavbarComp />
      {children}
      {!isFooterHide && <Footer />}
    </>
  );
};

export default BaseLayouts;
