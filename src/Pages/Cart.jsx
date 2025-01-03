import React, { useState } from "react";
import BaseLayouts from "../Layouts/BaseLayouts";
import QuantityPicker from "../Components/Utils/QuantityPicker";
import { FaRegTrashCan } from "react-icons/fa6";

const Cart = () => {
  const productsDis = [
    {
      title: "ASUS TUF GAMING A16",
      category: "Laptop",
      img: "https://dlcdnwebimgs.asus.com/gain/d5e3167c-efa8-46ce-bd78-65a4e99af3f6/w800",
      price: 16000000,
      salePrice: 14000000,
      stock: "20",
      quantity: 4,
    },
    {
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      category: "Smart Watch",
      img: "https://images.samsung.com/is/image/samsung/p6pim/id/sm-r861nzkaxse/gallery/id-galaxy-watch-fe-r861-sm-r861nzkaxse-thumb-542345719?$344_344_PNG$",
      salePrice: 500000,
      stock: "20",
      quantity: 1,
    },
    {
      title:
        "Mac Mini 2020 – Apple M1 Chip with 8-Core CPU and 8-Core GPU 512GB Storage",
      category: "PC",
      img: "https://macstore.id/wp-content/uploads/2021/01/mac-mini-202011-gallery-3-1.jpeg",
      salePrice: 8000000,
      stock: "20",
      quantity: 1,
    },
    {
      title: "Iphone 15 128Gb",
      category: "Phone",
      img: "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_1.jpg&w=3840&q=45",
      salePrice: 10990000,
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

  const tax = discountPrice * (11 / 100);

  return (
    <BaseLayouts>
      <section className="min-h-screen">
        <div className="container">
          <div className="md:px-4 py-12">
            <h1 className="font-semibold text-xl md:text-3xl mb-2">
              Shopping Chart
            </h1>
            <p className="font-medium text-gray-600 text-xs md:text-sm">
              Showing your choices product
            </p>
          </div>
          <div className="md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 border bg-white px-4 py-6 md:px-6 md:py-8 rounded-md ">
              {productsDis.length > 1 ? (
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
                        className="w-24 md:w-32"
                      />
                      <div className="w-3/5 ms-4 space-y-2">
                        <h1 className="font-medium text-base md:text-lg truncate">
                          {data.title}
                        </h1>
                        <h5 className="font-medium text-sm text-gray-500">
                          Stock : {data.stock}
                        </h5>
                        <div>
                          {data.price && (
                            <span className="text-xs md:text-sm text-red-400 line-through">
                              Rp {data.price.toLocaleString("id-ID")}
                            </span>
                          )}
                          <h5 className="text-sm md:text-base font-medium text-gray-900 dark:text-white">
                            Rp{" "}
                            {data.salePrice.toLocaleString("id-ID") ?? "Rp -"}
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
            </div>
            <div>
              <div className="border bg-white px-4 py-6 md:px-6 md:py-8 rounded-md">
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
                <div className="space-y-4 border-b py-5">
                  <div className="flex justify-between">
                    <h1 className="text-sm font-medium">Total Price</h1>
                    <h3 className="font-medium text-sm">
                      Rp {totalPrice.toLocaleString("id-ID")}
                    </h3>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="text-sm font-medium">Discount</h1>
                    <h3 className="font-medium text-sm">
                      Rp {(totalPrice - discountPrice).toLocaleString("id-ID")}
                    </h3>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="text-sm font-medium">Tax</h1>
                    <h3 className="font-medium text-sm">
                      Rp {tax.toLocaleString("id-ID")}
                    </h3>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="text-sm font-medium">Shipping</h1>
                    <h3 className="font-medium text-sm">
                      Rp {(100000).toLocaleString("id-ID")}
                    </h3>
                  </div>
                </div>
                <div className="flex justify-between py-8">
                  <h1 className="font-medium text-base md:text-lg">
                    Total Price After Tax
                  </h1>
                  <h3 className="font-medium text-base md:text-lg">
                    Rp {(discountPrice + tax + 100000).toLocaleString("id-ID")}
                  </h3>
                </div>
                <button className="bg-black text-white font-medium text-sm  w-full rounded-md text-center py-4">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayouts>
  );
};

export default Cart;
