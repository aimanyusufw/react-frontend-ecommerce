import React, { useState } from "react";
import QuantityPicker from "../Components/Utils/QuantityPicker";
import { FaRegTrashCan } from "react-icons/fa6";
import TransationLayout from "../Layouts/TransactionLayout";

const Cart = () => {
  const productsDis = [
    {
      title: "ASUS TUF GAMING A16",
      category: "Laptop",
      img: "https://dlcdnwebimgs.asus.com/gain/d5e3167c-efa8-46ce-bd78-65a4e99af3f6/w800",
      price: 16000000,
      salePrice: 14000000,
      stock: "20",
      quantity: 1,
    },
  ];

  const [quantities, setQuantities] = useState(
    productsDis.map((product) => product.quantity)
  );

  const updateQuantityAtIndex = (index, newQuantity) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index ? newQuantity : quantity
      )
    );
  };

  const totalPrice = productsDis
    .map(
      (data, i) => (data.price ? data.price : data.salePrice) * quantities[i]
    )
    .reduce((acc, cur) => acc + cur);

  const discountPrice = productsDis
    .map((data, i) => data.salePrice * quantities[i])
    .reduce((acc, cur) => acc + cur, 0);

  const finalPrices = [
    { title: "Total Price", price: totalPrice },
    { title: "Discount", price: totalPrice - discountPrice },
  ];

  return (
    <TransationLayout
      heading={"Shopping Chart"}
      subHeading={"Showing your choices product"}
    >
      <TransationLayout.Left>
        {productsDis.length > 0 ? (
          <div className="space-y-4">
            {productsDis.map((data, index) => (
              <div
                className={`flex py-4 justify-between items-center ${
                  index !== productsDis.length - 1 ? "border-b" : ""
                }`}
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-12 md:w-24 lg:w-32"
                />
                <div className="w-2/5 md:w-3/5 ms-2 md:ms-4 space-y-1 md:space-y-2">
                  <h1 className="font-medium text-sm md:text-lg truncate">
                    {data.title}
                  </h1>
                  <h5 className="font-medium text-xs md:text-sm text-gray-500">
                    Stock : {data.stock}
                  </h5>
                  <div>
                    {data.price && (
                      <span className="text-xs md:text-sm text-red-400 line-through">
                        Rp {data.price.toLocaleString("id-ID")}
                      </span>
                    )}
                    <h5 className="text-sm md:text-base font-medium text-gray-900 dark:text-white">
                      Rp {data.salePrice.toLocaleString("id-ID") ?? "Rp -"}
                    </h5>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <QuantityPicker
                      quantity={quantities[index]}
                      setQuantity={(newQuantity) =>
                        updateQuantityAtIndex(index, newQuantity)
                      }
                      stock={data.stock}
                      size={"sm"}
                    />
                    <button className="border p-2 rounded-md ms-2">
                      <FaRegTrashCan className="text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24">
            <h1 className="font-medium text-lg text-gray-600 text-center">
              Your cart is currently empty.
            </h1>
          </div>
        )}
      </TransationLayout.Left>
      <TransationLayout.Right>
        <h1 className="font-semibold text-lg md:text-xl mb-6">
          Product Summary
        </h1>
        <div className="space-y-4 border-b py-5">
          {productsDis.map((product, i) => (
            <div className="flex gap-2 justify-between">
              <h1 className="w-3/5 truncate text-sm font-medium">
                {product.title}
              </h1>
              <h2 className="font-medium text-sm">
                Rp{" "}
                {(
                  (product.price ? product.price : product.salePrice) *
                  quantities[i]
                ).toLocaleString("id-ID")}
              </h2>
            </div>
          ))}
        </div>
        <div className="space-y-4 pt-5">
          {finalPrices.map((data) => (
            <div className="flex justify-between">
              <h1 className="text-sm font-medium">{data.title}</h1>
              <h3 className="font-medium text-sm">
                Rp {data.price.toLocaleString("id-ID")}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex justify-between py-8">
          <h1 className="font-medium text-base md:text-lg">Total Price</h1>
          <h3 className="font-medium text-base md:text-lg">
            Rp {(discountPrice + 100000).toLocaleString("id-ID")}
          </h3>
        </div>
        <a href="/cart/checkout">
          <button className="bg-black text-white font-medium text-sm  w-full rounded-md text-center py-4">
            Check Out
          </button>
        </a>
      </TransationLayout.Right>
    </TransationLayout>
  );
};

export default Cart;
