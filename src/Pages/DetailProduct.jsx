import React, { useState } from "react";
import BaseLayouts from "../Layouts/BaseLayouts";
import { FaCartShopping } from "react-icons/fa6";
import ProductsSection from "../Components/Ui/Section/ProductsSection";
import QuantityPicker from "../Components/Utils/QuantityPicker";
import ProductsDescriptionSection from "../Components/Ui/Section/ProductsDescriptionSection copy";
import ProductsReviewSection from "../Components/Ui/Section/ProductsReviewSection";

const DetailProduct = () => {
  const products = [
    {
      title: "ASUS TUF GAMING A16",
      category: "Laptop",
      img: "https://dlcdnwebimgs.asus.com/gain/d5e3167c-efa8-46ce-bd78-65a4e99af3f6/w800",
      salePrice: "Rp 14.000.000,00",
    },
    {
      title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      category: "Smart Watch",
      img: "https://images.samsung.com/is/image/samsung/p6pim/id/sm-r861nzkaxse/gallery/id-galaxy-watch-fe-r861-sm-r861nzkaxse-thumb-542345719?$344_344_PNG$",
      salePrice: "Rp 500.000,00",
    },
    {
      title:
        "Mac Mini 2020 – Apple M1 Chip with 8-Core CPU and 8-Core GPU 512GB Storage",
      category: "PC",
      img: "https://macstore.id/wp-content/uploads/2021/01/mac-mini-202011-gallery-3-1.jpeg",
      salePrice: "Rp 9.000.000,00",
    },
    {
      title: "Iphone 15 128Gb",
      category: "Phone",
      img: "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_1.jpg&w=3840&q=45",
      price: "Rp 12.000.000,00",
      salePrice: "Rp 10.990.000,00",
    },
  ];

  const product = {
    id: 1,
    title: "Iphone 13",
    slug: "iphone-13",
    excerpt:
      "T-Shirt Ellipsesinc. adalah salah satu lini pakaian terbaik dan berkualitas tinggi di antara Local Brand Indonesia. Dibuat dengan bahan katun yang nyaman dipakai untuk menemani harimu dan memiliki desain yang unik. Dapatkan tshirt dengan warna cantik ini untuk tampil menarik setiap saat!",
    categories: [
      {
        name: "Elektronik",
        slug: "elektronik",
        featured_image: {
          alt: null,
          title: "Untitled design(13)",
          url: "http://localhost:8000/storage/media/fdd441d6-5a0f-481d-af7c-fef96c15a58a.png",
          thumbnail_url:
            "http://localhost:8000/curator/media/fdd441d6-5a0f-481d-af7c-fef96c15a58a.png?w=200&h=200&fit=crop&fm=webp&s=2f241c88a30d14142bdd19053fa48eb7",
          medium_url:
            "http://localhost:8000/curator/media/fdd441d6-5a0f-481d-af7c-fef96c15a58a.png?w=640&h=640&fit=crop&fm=webp&s=6b244cc3488375bf4d5b648da2e4f9d1",
          large_url:
            "http://localhost:8000/curator/media/fdd441d6-5a0f-481d-af7c-fef96c15a58a.png?w=1024&h=1024&fit=contain&fm=webp&s=1f056c3b89df3c346d058483d062870a",
          caption: null,
        },
      },
      {
        name: "Life Style",
        slug: "life-style",
        featured_image: {
          alt: null,
          title:
            "zenbook_s_14_ux5406sa_product_photo_3w_scandinavian_white__03.1_1",
          url: "http://localhost:8000/storage/media/6e8a51ea-93f2-431d-bf61-6cb082fd29ec.jpg",
          thumbnail_url:
            "http://localhost:8000/curator/media/6e8a51ea-93f2-431d-bf61-6cb082fd29ec.jpg?w=200&h=200&fit=crop&fm=webp&s=18d7be300f9ed867b5bcbd20f010b27c",
          medium_url:
            "http://localhost:8000/curator/media/6e8a51ea-93f2-431d-bf61-6cb082fd29ec.jpg?w=640&h=640&fit=crop&fm=webp&s=cf96c2d580ee65658f66a8a9907acbcd",
          large_url:
            "http://localhost:8000/curator/media/6e8a51ea-93f2-431d-bf61-6cb082fd29ec.jpg?w=1024&h=1024&fit=contain&fm=webp&s=ecdf4b6f56452d49fa06a38421812100",
          caption: null,
        },
      },
    ],
    description: "<p>Iphone 13</p>",
    weight: 500,
    price: 11000000,
    sale_price: 8900000,
    stock: 20,
    images: [
      {
        alt: null,
        title: "iphone_13_midnight_1",
        url: "http://localhost:8000/storage/media/02af3861-8aae-40b9-bbbd-a441651aca12.webp",
        thumbnail_url:
          "https://dlcdnwebimgs.asus.com/gain/d5e3167c-efa8-46ce-bd78-65a4e99af3f6/w800",
        medium_url:
          "http://localhost:8000/curator/media/02af3861-8aae-40b9-bbbd-a441651aca12.webp?w=640&h=640&fit=crop&fm=webp&s=2ca846135fd8ad3da46c236f4a522f2e",
        large_url:
          "http://localhost:8000/curator/media/02af3861-8aae-40b9-bbbd-a441651aca12.webp?w=1024&h=1024&fit=contain&fm=webp&s=1657d40518bacb00546ed97807bcf557",
        caption: null,
      },
      {
        alt: null,
        title:
          "zenbook_s_14_ux5406sa_product_photo_3w_scandinavian_white__03.1_1",
        url: "http://localhost:8000/storage/media/6e8a51ea-93f2-431d-bf61-6cb082fd29ec.jpg",
        thumbnail_url:
          "https://images.samsung.com/is/image/samsung/p6pim/id/sm-r861nzkaxse/gallery/id-galaxy-watch-fe-r861-sm-r861nzkaxse-thumb-542345719?$344_344_PNG$",
        medium_url:
          "http://localhost:8000/curator/media/6e8a51ea-93f2-431d-bf61-6cb082fd29ec.jpg?w=640&h=640&fit=crop&fm=webp&s=cf96c2d580ee65658f66a8a9907acbcd",
        large_url:
          "http://localhost:8000/curator/media/6e8a51ea-93f2-431d-bf61-6cb082fd29ec.jpg?w=1024&h=1024&fit=contain&fm=webp&s=ecdf4b6f56452d49fa06a38421812100",
        caption: null,
      },
    ],
    created_at: {
      date_time: "2024-12-04T12:39:49.000000Z",
      humanize: "3 weeks ago",
    },
  };
  const [featuredImage, setFeaturedImage] = useState(
    product.images[0].thumbnail_url
  );
  const [quantity, setQuantity] = useState(1);

  const discount = Math.max(
    0,
    Math.round(((product.price - product.sale_price) / product.price) * 100)
  );

  return (
    <BaseLayouts>
      <div className="md:py-4 py-12 min-h-screen">
        <div className="container">
          <div className="md:px-4 grid col-span-1 md:grid-cols-2 md:gap-2  gap-4">
            <div className="w-full mb-8 md:mb-0">
              <img
                src={featuredImage}
                alt=""
                className="w-full mb-4 rounded-md"
              />
              <div className="flex gap-2 overflow-x-scroll">
                {product.images.map((data) => (
                  <button
                    key={data.thumbnail_url}
                    onClick={() => setFeaturedImage(data.thumbnail_url)}
                  >
                    <img
                      src={data.thumbnail_url}
                      alt={data.alt}
                      className={`rounded-md w-14 md:w-20 ${
                        featuredImage == data.thumbnail_url
                          ? "border-2 border-black"
                          : "border-2 border-white"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full space-y-6">
              <div className="flex gap-2">
                {product.categories.map((data) => (
                  <span
                    key={data.slug}
                    className="border rounded-full px-2 py-1 text-xs md:text-sm"
                  >
                    {data.name}
                  </span>
                ))}
              </div>
              <h1 className="font-medium text-3xl">{product.title}</h1>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-md">
                {product.excerpt}
              </p>
              <h5 className="text-xs md:text-sm font-medium">
                Weight : {product.weight / 1000} Kg
              </h5>
              <h5 className="text-xs md:text-sm font-medium">
                Stock : {product.stock}
              </h5>
              <QuantityPicker
                quantity={quantity}
                setQuantity={setQuantity}
                stock={product.stock}
              />
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  {product.sale_price != product.price && (
                    <h3 className="text-xs md:text-base text-red-500 line-through">
                      Rp {product.price.toLocaleString("id-ID")}
                    </h3>
                  )}
                  <h1 className="font-medium text-xl md:text-3xl">
                    Rp {product.sale_price.toLocaleString("id-ID")}
                  </h1>
                </div>
                {discount !== 0 ? (
                  <h1 className="text-xs md:text-sm font-medium">
                    Discount {discount}%
                  </h1>
                ) : (
                  ""
                )}
              </div>
              <button className="bg-black rounded-md text-white w-full py-4 text-xs md:text-sm font-medium flex justify-center items-center">
                <FaCartShopping className="me-2" />
                Add To Cart
              </button>
            </div>
          </div>
          <div
            className="mt-5 md:mt-8 md:px-4"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
        </div>
        <ProductsDescriptionSection title={"Product Description"} />
        <ProductsReviewSection title={"Product Review"} />
        <ProductsSection title={"Recomended Product"} data={products} />
      </div>
    </BaseLayouts>
  );
};

export default DetailProduct;
