import bannerLeft from '../assets/images/left-banner-image.jpg'
import bannerRight01 from '../assets/images/baner-right-image-01.jpg'
import bannerRight02 from '../assets/images/baner-right-image-02.jpg'
import bannerRight03 from '../assets/images/baner-right-image-03.jpg'
import bannerRight04 from '../assets/images/baner-right-image-04.jpg'

export default function Banner() {
  const rightBanners = [
    { img: bannerRight01, title: "Women", subtitle: "Latest trends for stylish women" },
    { img: bannerRight02, title: "Men", subtitle: "Premium collection for men" },
    { img: bannerRight03, title: "Kid", subtitle: "Comfortable & fun clothing for kids" },
    { img: bannerRight04, title: "Accessories", subtitle: "Complete your look with our accessories" },
  ];

  return (
    <div className="pt-28 px-8 border-b-2 border-dotted border-gray-300 pb-8 flex flex-col md:flex-row gap-4 bg-white relative z-0">
      {/* Left Banner */}
      <div className="relative md:w-1/2 h-[500px] rounded-lg overflow-hidden group">
        <img src={bannerLeft} alt="Banner" className="h-full w-full object-cover" />

        <div className="absolute inset-0 flex flex-col justify-center items-start bg-black/30 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            We Are Hexashop
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-2">
            Your perfect eCommerce solution
          </p>
          <button className="mt-4 px-6 py-2 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Banners */}
      <div className="md:w-1/2 grid grid-cols-2 grid-rows-2 gap-2 h-[500px]">
        {rightBanners.map((banner, idx) => (
          <div key={idx} className="relative rounded-lg overflow-hidden group">
            <img src={banner.img} alt={`Banner ${idx + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-start bg-black/30 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-2xl font-bold text-white drop-shadow-md">{banner.title}</h2>
              <p className="text-gray-200 mt-1 text-sm">{banner.subtitle}</p>
              <button className="mt-3 px-4 py-2 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition-colors duration-300">
                Discover More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
