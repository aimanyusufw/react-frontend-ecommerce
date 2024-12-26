import React from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const NavbarComp = () => {
  return (
    <Navbar rounded className="container md:px-4">
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
          TechNova
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        <Button color="gray">
          <a href="/signin">Sign In</a>
        </Button>
        <Button color="dark">
          <a href="/signup">Sign Up</a>
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
