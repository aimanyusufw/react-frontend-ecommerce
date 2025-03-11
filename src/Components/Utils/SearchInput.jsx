import { TextInput } from "flowbite-react";
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <form className="w-full mx-auto">
      <div className="flex">
        <label
          for="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <TextInput
          className="w-full"
          id="email4"
          type="search"
          icon={FiSearch}
          placeholder="Find what you want.."
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;
