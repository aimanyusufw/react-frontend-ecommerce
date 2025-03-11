import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import SearchInput from "../../Utils/SearchInput";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

const NavbarComp = () => {
  return (
    <Navbar rounded className="md:px-6">
      <Navbar.Brand href="/" className="hidden md:block">
        <img
          src="/Logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <div className="flex gap-2 justify-between items-center w-full md:w-3/4 lg:w-2/5 md:order-2">
        <Link to={-1} className="md:hidden">
          <FiChevronLeft size={26} />
        </Link>
        <SearchInput />

        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              className="w-10"
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item href="/profile">Profile</Dropdown.Item>
          <Dropdown.Item href="/order">Order</Dropdown.Item>
          <Dropdown.Item href="/cart">Cart</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default NavbarComp;
