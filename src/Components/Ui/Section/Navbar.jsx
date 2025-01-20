import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import SearchInput from "../../Utils/SearchInput";
import { FaCartShopping } from "react-icons/fa6";

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
      <div className="flex w-full md:w-3/4 lg:w-1/2 md:order-2">
        <SearchInput />
        <a
          href="/cart"
          type="button"
          className="relative inline-flex items-center ext-sm font-medium text-center mx-4"
        >
          <FaCartShopping className="w-5 h-5" />
          <span class="sr-only">Notifications</span>
          <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            20
          </div>
        </a>

        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
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
          <Dropdown.Item>Order</Dropdown.Item>
          <Dropdown.Item href="/cart">Cart</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default NavbarComp;
