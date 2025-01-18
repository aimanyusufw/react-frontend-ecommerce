import React, { useState } from "react";
import TransationLayout from "../Layouts/TransactionLayout";
import { FaEdit } from "react-icons/fa";
import AddressCard from "../Components/Ui/Cards/AddressCard";
import ShippingCard from "../Components/Ui/Cards/ShippingCard";

const CheckOut = () => {
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

  const quantities = productsDis.map((data) => data.quantity);

  const totalPrice = productsDis
    .map(
      (data, i) => (data.price ? data.price : data.salePrice) * quantities[i]
    )
    .reduce((acc, cur) => acc + cur);

  const discountPrice = productsDis
    .map((data, i) => data.salePrice * quantities[i])
    .reduce((acc, cur) => acc + cur, 0);

  const tax = discountPrice * (11 / 100);

  const finalPrices = [
    { title: "Total Price", price: totalPrice },
    { title: "Discount", price: totalPrice - discountPrice },
    { title: "Shipping", price: 100000 },
    { title: "Tax & Fee", price: tax + 2500 },
  ];

  const billingInformation = [
    {
      label: "Name",
      value: "Aiman Yusuf Wicaksono",
    },
    {
      label: "Phone",
      value: "08386508661",
    },
    {
      label: "Email",
      value: "email@example.com",
    },
    {
      label: "Name",
      value: "Address : Jl Tadipage RT 4 RW 3",
    },
  ];

  const UserAddreses = [
    {
      title: "Rumah Pribadi",
      province: "Jawa Tengah",
      city: "Kendal",
      address: "Jl Tadipage RT 4, Desa Dempelrejo RW 3",
    },
    {
      title: "Kantor",
      province: "Jawa Tengah",
      city: "Kendal",
      address: "Jl Tadipage RT 4, Desa Dempelrejo RW 3",
    },
  ];

  const shippingMethod = [
    {
      title: "JNT - Regular",
      price: 50000,
      estimated: "3-4 Days",
      destination: {
        province: "Jawa Tengah",
        city: "Kendal",
      },
    },
    {
      title: "JNT Cepat Kilat",
      price: 100000,
      estimated: "3-4 Days",
      destination: {
        province: "Jawa Tengah",
        city: "Kendal",
      },
    },
  ];

  return (
    <TransationLayout
      heading={"Review Your Purchase"}
      subHeading={"Below is a list of your selected items."}
    >
      <TransationLayout.Left>
        <div className="space-y-8 md:space-y-10">
          <div>
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h1 className="text-base md:text-lg lg:text-xl font-medium">
                Billing Information
              </h1>
              <button>
                <FaEdit />
              </button>
            </div>
            {billingInformation.map((data) => (
              <div className="text-xs md:text-sm font-medium mb-4 grid grid-cols-2 md:grid-cols-3">
                <h1>{data.label}</h1>
                <h1>{data.value}</h1>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h1 className="text-base md:text-lg lg:text-xl font-medium">
                Shipping Address
              </h1>
              <button>
                <FaEdit />
              </button>
            </div>
            <AddressCard address={UserAddreses} />
          </div>
          <div>
            <h1 className="text-base md:text-lg lg:text-xl font-medium  mb-4 md:mb-6">
              Shipping Method
            </h1>
            <ShippingCard shipping={shippingMethod} />
          </div>
        </div>
      </TransationLayout.Left>
      <TransationLayout.Right>
        <h1 className="font-semibold text-lg md:text-xl mb-6">
          Product Summary
        </h1>
        <div className="space-y-4 border-b py-5">
          {productsDis.map((product, i) => (
            <div className="flex gap-2 justify-between">
              <h1 className="w-3/5 truncate text-sm font-medium">
                {product.title} x {quantities[i]}
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
          <h1 className="font-medium text-base md:text-lg">Final Price</h1>
          <h3 className="font-medium text-base md:text-lg">
            Rp {(discountPrice + tax + 100000).toLocaleString("id-ID")}
          </h3>
        </div>
        <a href="/cart/checkout">
          <button className="bg-black text-white font-medium text-sm  w-full rounded-md text-center py-4">
            Proces Order
          </button>
        </a>
      </TransationLayout.Right>
    </TransationLayout>
  );
};

export default CheckOut;
