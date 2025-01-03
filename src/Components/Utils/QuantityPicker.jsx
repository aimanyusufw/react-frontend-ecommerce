import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const QuantityPicker = ({
  quantity = 1,
  setQuantity = () => {},
  stock = 1,
  size = "lg",
}) => {
  if (!["sm", "lg"].includes(size)) {
    console.error("Invalid size prop. Only 'sm' or 'lg' are allowed.");
    size = "lg";
  }

  if (quantity < 1) {
    console.error("Quantity cannot be less than 1.");
    quantity = 1;
  }

  if (stock < 1) {
    console.error("Stock cannot be less than 1.");
    stock = 1;
  }

  return (
    <div
      className={`${
        size === "sm" ? "w-20 p-1" : "w-32 p-1.5"
      } flex rounded-lg border-2`}
    >
      <button
        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
        disabled={quantity === 1}
        className={`w-[30%] flex justify-center items-center ${
          size === "sm" ? "py-2" : "py-3"
        } hover:bg-gray-300 transition-colors duration-300 rounded-md ${
          quantity === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        <FaMinus
          className={
            size === "sm" ? "w-1 h-1 md:w-2 md:h-2" : "w-2 h-2 md:w-3 md:h-3"
          }
        />
      </button>

      <div
        className={`w-[40%] flex justify-center items-center ${
          size === "sm" ? "text-xs md:text-sm" : "text-sm md:text-lg"
        }`}
      >
        {quantity}
      </div>

      <button
        disabled={quantity === stock}
        onClick={() => setQuantity(quantity < stock ? quantity + 1 : stock)}
        className={`w-[30%] flex justify-center items-center ${
          size === "sm" ? "py-2" : "py-3"
        } hover:bg-gray-300 transition-colors duration-300 rounded-md ${
          quantity === stock ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        <FaPlus
          className={
            size === "sm" ? "w-1 h-1 md:w-2 md:h-2" : "w-2 h-2 md:w-3 md:h-3"
          }
        />
      </button>
    </div>
  );
};

export default QuantityPicker;
