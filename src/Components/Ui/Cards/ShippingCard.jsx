import React, { useState } from "react";

const ShippingCard = ({ shipping }) => {
  const [selected, setSelected] = useState(0);

  return shipping.map((data, index) => (
    <div className="mb-4" key={index} onClick={() => setSelected(index)}>
      <input
        id={`shipping-${index}`}
        name="shipping"
        type="radio"
        className="hidden peer"
        defaultChecked={index == 0}
      />
      <label
        htmlFor={`shipping-${index}`}
        className="p-5 flex items-center justify-evenly gap-5 rounded-md bg-neutral-100 peer-checked:border-red-600 space-y-2 border-2 border-transparent hover:border-gray-300 transition cursor-pointer"
      >
        <div className="max-w-24">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/92/New_Logo_JNE.png"
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-medium text-base md:text-lg flex items-center">
            {data.title}
            {selected === index && (
              <span className="ml-2 bg-red-100 text-red-600 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300 ">
                Selected
              </span>
            )}
          </h1>
          <p>{data.estimated}</p>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed max-w-xl">
            Sended from Jakarta to {data.destination.city} -{" "}
            {data.destination.province}
          </p>
        </div>
        <h1>Rp {data.price.toLocaleString("id-ID")}</h1>
      </label>
    </div>
  ));
};

export default ShippingCard;
