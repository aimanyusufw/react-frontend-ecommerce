import React, { useState } from "react";

const AddressCard = ({ address }) => {
  const [selected, setSelected] = useState(0);

  return address.map((data, index) => (
    <div className="mb-4" key={index} onClick={() => setSelected(index)}>
      <input
        id={`address-${index}`}
        name="address"
        type="radio"
        className="hidden peer"
        defaultChecked={index == 0}
      />
      <label
        htmlFor={`address-${index}`}
        className="p-5 rounded-md bg-neutral-100 peer-checked:border-blue-600 block space-y-2 border-2 border-transparent hover:border-gray-300 transition cursor-pointer"
      >
        <h1 className="font-medium text-base md:text-lg flex items-center">
          {data.title}
          {selected === index && (
            <span className="ml-2 bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 ">
              Selected
            </span>
          )}
        </h1>
        <p className="text-xs md:text-sm lg:text-base leading-relaxed max-w-xl">
          Province Jawa Tengah, City Kabupaten Kendal, Jl Tadipage RT 4, Desa
          Dempelrejo RW 3
        </p>
      </label>
    </div>
  ));
};

export default AddressCard;
