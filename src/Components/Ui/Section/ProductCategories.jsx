import React from "react";

export default function ProductCategories() {
  const categories = [
    {
      name: "Laptop",
      url: "#",
      image:
        "https://dlcdnwebimgs.asus.com/gain/d5e3167c-efa8-46ce-bd78-65a4e99af3f6/w800",
    },
    {
      name: "PC",
      url: "#",
      image:
        "https://macstore.id/wp-content/uploads/2021/01/mac-mini-202011-gallery-3-1.jpeg",
    },
    {
      name: "Phone",
      url: "#",
      image:
        "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_1.jpg&w=3840&q=45",
    },
    {
      name: "Smart Watch",
      url: "#",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/id/sm-r861nzkaxse/gallery/id-galaxy-watch-fe-r861-sm-r861nzkaxse-thumb-542345719?$344_344_PNG$",
    },
    {
      name: "Television",
      url: "#",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDarj-2djkEz1w0wKtFUFBkTrOUpBRlyYF3A&s",
    },
    {
      name: "Headset",
      url: "#",
      image: "https://els.id/wp-content/uploads/2023/11/Olike-H2-1.jpg",
    },
  ];

  return (
    <section className="py-2 md:py-8">
      <div className="container">
        <div className="md:px-4 mb-6 md:mb-8">
          <h1 className="ps-4 border-l-4 border-black font-bold text-base md:text-xl lg:text-2xl">
            Product Categories
          </h1>
        </div>
        <div className="flex md:px-4 gap-10 overflow-x-auto py-2">
          {categories.map((data) => (
            <a
              key={data.name}
              href={data.url}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden p-2 group">
                <img
                  src={data.image || "https://via.placeholder.com/40"}
                  alt={data.alt || "User profile"}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xs md:text-base font-medium break-words">
                {data.name}
              </h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
