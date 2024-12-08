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
    <Navbar rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
          TECHNova
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
