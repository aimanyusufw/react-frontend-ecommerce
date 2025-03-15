import React, { useState } from "react";
import BaseLayouts from "../../Layouts/BaseLayouts";

const Order = () => {
  const menus = [
    { placeholder: "All", tab: "all" },
    { placeholder: "Unpaid", tab: "unpaid" },
    { placeholder: "Processing", tab: "processing" },
    { placeholder: "Ready To Ship", tab: "readyToShip" },
    { placeholder: "Shipping", tab: "shipping" },
    { placeholder: "Completed", tab: "completed" },
    { placeholder: "Cancelled", tab: "cancelled" },
  ];

  const [activeTab, setActiveTab] = useState("all");

  return (
    <BaseLayouts>
      <section className="min-h-screen py-8 md:py-12">
        <div className="container">
          <div className="md:px-2 grid grid-cols-4 gap-4">
            <div className="flex flex-col gap-1">
              {menus.map((data) => (
                <button
                  key={data.tab}
                  onClick={() => setActiveTab(data.tab)}
                  className={`text-start px-4 py-3 w-full rounded-md transition-colors duration-200 ${
                    activeTab === data.tab
                      ? "bg-blue-500"
                      : "hover:bg-blue-500 hover:text-white text-black"
                  } text-white`}
                >
                  {data.placeholder}
                </button>
              ))}
            </div>

            <div className="p-5 border rounded-md col-span-3">
              {activeTab === "all" && <h1>All Orders</h1>}
              {activeTab === "unpaid" && <h1>Unpaid Orders</h1>}
              {activeTab === "processing" && <h1>Processing Orders</h1>}
              {activeTab === "readyToShip" && <h1>Ready To Ship Orders</h1>}
              {activeTab === "shipping" && <h1>Shipping Orders</h1>}
              {activeTab === "completed" && <h1>Completed Orders</h1>}
              {activeTab === "cancelled" && <h1>Cancelled Orders</h1>}
            </div>
          </div>
        </div>
      </section>
    </BaseLayouts>
  );
};

export default Order;
