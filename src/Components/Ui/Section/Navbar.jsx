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
    <Navbar rounded className="px-4">
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
          TechNova
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        <Button color="gray">Login</Button>
        <Button color="dark">Register</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">Products</NavbarLink>
        <NavbarLink href="#">Contant Us</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavbarComp;
