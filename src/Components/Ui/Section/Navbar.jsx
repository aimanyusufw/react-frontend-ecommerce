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
    <Navbar rounded className="container md:px-4">
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
          TechNova
        </span>
      </NavbarBrand>
      <div className="flex items-center md:order-2 gap-2">
        <button className="me-2 relative py-3">
          <FaCartShopping className="w-5 h-5" />
          <span className="absolute top-1 left-2 px-1.5  bg-red-500 rounded-full text-xs text-white">
            1
          </span>
        </button>
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
