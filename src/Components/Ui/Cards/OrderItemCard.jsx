import React from "react";

const OrderItemCard = ({ data }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img
          src="https://dlcdnwebimgs.asus.com/gain/d5e3167c-efa8-46ce-bd78-65a4e99af3f6/w800"
          alt={data.name}
          className="w-32 bg-slate-200 rounded-sm"
        />
        <div className="ms-4 space-y-3">
          <h1 className="font-medium text-sm md:text-lg">{data.name}</h1>
          <p className="font-medium text-xs md:text-sm">
            Quantity: {data.quantity}
          </p>
          <h2 className="font-medium text-xs md:text-sm">
            {data.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </h2>
        </div>
      </div>
      <h2 className="font-semibold text-sm md:text-lg">
        {(data.price * data.quantity).toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </h2>
    </div>
  );
};

export default OrderItemCard;
