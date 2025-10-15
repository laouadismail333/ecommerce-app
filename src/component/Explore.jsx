import explore01 from "../assets/images/explore-image-01.jpg";
import explore02 from "../assets/images/explore-image-02.jpg";

export default function Explore() {
  return (
    <section className="mt-16 px-8 md:px-16 pt-9 pb-10 border-b-2 border-dotted border-gray-300">
      <h1 className="text-3xl font-bold mb-8">Explore And Discover Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left Column - Description */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 text-lg mb-4">
            Discover our wide range of products. From premium leather bags to exclusive collections, we have something for everyone. Explore our latest items with style, comfort, and quality.
          </p>
          <p className="text-gray-500 text-base">
            Our commitment to excellence ensures that every product is crafted with attention to detail and superior materials. Whether you’re searching for timeless classics or modern designs, our selection is curated to meet diverse tastes and needs. Experience shopping like never before with fast delivery, secure payments, and dedicated customer support.
          </p>
        </div>
        {/* Right Column - Cards */}
        <div className="md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
          {/* Top-left text card */}
          <div className="bg-gray-900 text-white rounded-2xl p-6 flex flex-col justify-center hover:bg-gray-800 transition-colors duration-300 h-64">
            <h3 className="text-2xl font-bold mb-2">Leather Bags</h3>
            <p className="text-gray-200 text-lg">Latest Collection</p>
          </div>

          {/* Top-right image */}
          <div className="relative rounded-2xl overflow-hidden h-64 group">
            <img
              src={explore01}
              alt="Leather Bags"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-100 transition-colors duration-200">
                Discover
              </button>
            </div>
          </div>

          {/* Bottom-left image */}
          <div className="relative rounded-2xl overflow-hidden h-64 group">
            <img
              src={explore02}
              alt="Exclusive Products"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-100 transition-colors duration-200">
                Discover
              </button>
            </div>
          </div>

          {/* Bottom-right text card */}
          <div className="bg-gray-900 text-white rounded-2xl p-6 flex flex-col justify-center hover:bg-gray-800 transition-colors duration-300 h-64">
            <h3 className="text-2xl font-bold mb-2">Different Types</h3>
            <p className="text-gray-200 text-lg">Over 304 Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}
