import React, { useState } from "react";
import { FaChevronDown, FaList } from "react-icons/fa6";

const ProfileAccordion = ({ children, icon, name, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between py-3 hover:bg-neutral-100 px-5 rounded-md transition-colors mb-4 w-full ${
          isOpen && "bg-neutral-100"
        }`}
      >
        <div className="flex items-center gap-5">
          {icon ? icon : <FaList className="w-6 h-6 text-neutral-700" />}
          <h1>{name ? name : "Name"}</h1>
        </div>
        <FaChevronDown className={`w-3 h-3 ${isOpen && "rotate-180"}`} />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 px-5 pb-5"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        {" "}
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default ProfileAccordion;
