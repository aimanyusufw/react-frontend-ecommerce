import React from "react";

export default function ProductsReviewSection({ title }) {
  return (
    <section className="py-2 md:py-8">
      <div className="container">
        <div className="md:px-4 mb-6 md:mb-8">
          <h1 className="ps-4 border-l-4 border-black font-bold text-base md:text-xl lg:text-2xl">
            {title ?? "Unilited Section"}
          </h1>
        </div>
        <div className="md:px-4 space-y-3 max-w-3xl">
          <h1>Product Description Section</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi
            quod excepturi velit eum facilis iusto maxime rerum assumenda, fuga
            a neque at nostrum aperiam beatae dolore nesciunt vero totam.
          </p>
        </div>
      </div>
    </section>
  );
}
