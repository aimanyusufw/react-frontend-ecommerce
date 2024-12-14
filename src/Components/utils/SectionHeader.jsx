import React from "react";

export default function SectionHeader({ title }) {
  return (
    <div className="md:px-4 mb-6 md:mb-8">
      <h1 className="ps-4 border-l-4 border-black font-bold text-xl md:text-2xl">
        {title ?? "Unilited Section"}
      </h1>
    </div>
  );
}
