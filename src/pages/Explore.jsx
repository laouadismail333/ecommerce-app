import { useState } from "react";
import productsData from "../data/product";

export default function Explore() {
  const categories = ["All", "Men", "Women", "Kids"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  return (
    <section className="pt-20 pb-20 bg-gray-50 mt-20">
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
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-black text-white shadow-lg scale-105"
                : "bg-white text-gray-800 shadow hover:shadow-md hover:scale-105"
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
                  className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-500"
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
