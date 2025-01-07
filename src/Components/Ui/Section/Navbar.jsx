import React from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";

const NavbarComp = () => {
  return (
    <Navbar rounded className="px-0 md:px-4">
      <NavbarBrand href="/">
        <img src="/Logo.svg" className="h-6 md:h-8" alt="" />
      </NavbarBrand>
      <div className="flex items-center md:order-2 gap-2">
        <a href="/cart" className="me-2 relative py-3">
          <FaCartShopping className="w-5 h-5" />
          <span className="absolute top-1 left-2 px-1.5  bg-red-500 rounded-full text-xs text-white">
            1
          </span>
        </a>
        <Button color="gray">
          <a href="/signup">Join Now</a>
        </Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/products">Products</NavbarLink>
        <NavbarLink href="/contatc-us">Contant Us</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavbarComp;
