import { useState } from "react";
import productsData from "../data/product";

export default function Explore() {
  const categories = ["All", "Men", "Women", "Kids"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  const handleQuickView = (item) => console.log('Quick view:', item.title)
  const handleAddToCart = (item) => console.log('Added to cart:', item.title)
  const handleShopNow = (item) => console.log('Shop now:', item.title)

  return (
    <section className="pt-20 pb-20 bg-gray-50 mt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Our Collection
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the latest trends and must-have items curated for you.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex justify-center gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg ${
              selectedCategory === cat
                ? "bg-black text-white scale-105"
                : "bg-white text-gray-800 hover:bg-gray-50 hover:scale-105"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          {selectedCategory} Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <article 
              key={product.id} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className='relative h-96 overflow-hidden'>
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700' 
                  loading="lazy"
                />
                
                {/* Label Badge */}
                {product.label && (
                  <span className='absolute top-4 left-4 bg-white/90 text-black text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide shadow-lg'>
                    {product.label}
                  </span>
                )}

                {/* Quick Action Buttons */}
                <div className='absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                  <button 
                    onClick={() => handleQuickView(product)} 
                    className='w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white shadow-lg transition-all duration-200 hover:scale-110'
                  >
                    <i className="fa-solid fa-eye text-gray-700 text-lg"></i>
                  </button>
                  <button 
                    onClick={() => handleAddToCart(product)} 
                    className='w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white shadow-lg transition-all duration-200 hover:scale-110'
                  >
                    <i className="fa-solid fa-cart-shopping text-gray-700 text-lg"></i>
                  </button>
                </div>
              </div>

              {/* Product Info - WITH SHOP NOW OVERLAY */}
              <div className='p-6 relative'>
                {/* Overlay Shop Now Button */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 pointer-events-none'>
                  <button 
                    onClick={() => handleShopNow(product)}
                    className='px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 shadow-lg pointer-events-auto ml-auto'
                  >
                    Shop Now
                    <i className="fa-solid fa-arrow-right text-sm"></i>
                  </button>
                </div>

                {/* Static Info */}
                <h3 className='text-lg font-semibold text-gray-900 mb-1'>{product.title}</h3>
                <p className='text-xl font-bold text-gray-900 mb-3'>{product.price}</p>
                <span className='inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full uppercase tracking-wide'>
                  {product.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}