import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const datas = [
    {
      name: "shop",
      data: ["Laptop", "Personal Computer", "Phone", "Smart Watch", "Headset"],
    },
    {
      name: "service",
      data: ["Customer Service", "Business", "Protection", "Warranty"],
    },
    {
      name: "about us",
      data: ["About us", "Contatc Us", "FAq", "Store Location"],
    },
    {
      name: "policy",
      data: ["Terms & Conditions", "Privacy Policy", "Disclaimer"],
    },
  ];

  const contact = [
    { name: "Email", detail: "info@aimanyusuf.site" },
    {
      name: "Store Address",
      detail: "Gedung garuda, Jakarta Selatan",
    },
    {
      name: "Call Center",
      detail: "08726125",
    },
  ];

  const socialMedia = [
    { name: "instagram", icon: <FaInstagram />, url: "#" },
    { name: "tiktok", icon: <FaTiktok />, url: "#" },
    { name: "youtube", icon: <FaYoutube />, url: "#" },
    { name: "Twitter", icon: <FaTwitter />, url: "#" },
    { name: "facebook", icon: <FaFacebook />, url: "#" },
  ];

  return (
    <footer className="py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-6 border-t py-4">
          {datas.map((data) => (
            <div key={data.name} className="flex flex-col gap-2">
              <h4 className="font-semibold capitalize text-lg md:text-xl">
                {data.name}
              </h4>
              {data.data.map((subData) => (
                <a
                  key={subData}
                  href="#"
                  className="text-xs md:text-sm font-medium  text-slate-600"
                >
                  {subData}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
          <div className="flex flex-col px-4 gap-2">
            <span className="text-xs md:text-sm">
              Operating Hours : <span>08:00 - 18:00</span>
            </span>
            {contact.map((data) => (
              <span key={data.name} className="text-xs md:text-sm">
                {data.name} :{" "}
                <a href="#" className="text-blue-500 underline">
                  {data.detail}
                </a>
              </span>
            ))}
          </div>
          <div className="px-4 gap-4">
            <h1 className="mb-4 font-semibold text-2xl">
              <img
                src="/Logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite React Logo"
              />
            </h1>
            <div className="flex gap-4">
              {socialMedia.map((data) => (
                <a key={data.name} href={data.url}>
                  {data.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 py-4 border-t px-4">
          <h5 className="text-xs font-medium md:text-sm">
            © 2024 Aiman Yusuf. All Rights Reserved.
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
