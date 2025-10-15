import { useState } from "react";
import men01 from "../assets/images/men-01.jpg";
import men02 from "../assets/images/men-02.jpg";
import men03 from "../assets/images/men-03.jpg";
import kid01 from "../assets/images/kid-01.jpg";
import kid02 from "../assets/images/kid-02.jpg";
import kid03 from "../assets/images/kid-03.jpg";
import women01 from "../assets/images/women-01.jpg";
import women02 from "../assets/images/women-02.jpg";
import women03 from "../assets/images/women-03.jpg";

export default function Explore() {
  const allProducts = [
    { id: 1, img: men01, title: "Classic Spring", price: "$119.99", category: "Men", label: "New" },
    { id: 2, img: men02, title: "Blue Jacket", price: "$139.99", category: "Men", label: "Hot" },
    { id: 3, img: men03, title: "Men's Classic", price: "$199.99", category: "Men" },
    { id: 4, img: women01, title: "Denim Jacket", price: "$109.99", category: "Women" },
    { id: 5, img: women02, title: "Floral Midi Dress", price: "$89.99", category: "Women", label: "New" },
    { id: 6, img: women03, title: "Silk Blouse", price: "$129.99", category: "Women" },
    { id: 7, img: kid01, title: "Playful T-Shirt", price: "$29.99", category: "Kids", label: "Hot" },
    { id: 8, img: kid02, title: "Denim Shorts", price: "$34.99", category: "Kids" },
    { id: 9, img: kid03, title: "Rainbow Dress", price: "$39.99", category: "Kids" },
  ];

  const categories = ["All", "Men", "Women", "Kids"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <section className="pt-20 pb-20 bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Explore Our Collection
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Discover the latest trends and must-have items curated for you.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 mb-16 flex justify-center gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              selectedCategory === cat
                ? "bg-black text-white shadow-lg"
                : "bg-white text-gray-800 shadow hover:shadow-md"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Trending Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer group relative"
            >
              {/* Label */}
              {product.label && (
                <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {product.label}
                </span>
              )}

              <div className="overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-gray-800">{product.title}</h3>
                <p className="text-gray-600 mt-1">{product.price}</p>
                <button className="mt-3 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
