import instagram01 from '../assets/images/instagram-01.jpg';
import instagram02 from '../assets/images/instagram-02.jpg';
import instagram03 from '../assets/images/instagram-03.jpg';
import instagram04 from '../assets/images/instagram-04.jpg';
import instagram05 from '../assets/images/instagram-05.jpg';
import instagram06 from '../assets/images/instagram-06.jpg';

const instagramImages = [
  instagram01, instagram02, instagram03, 
  instagram04, instagram05, instagram06,
];

export default function SocialMedia() {
  return (
    <section className="mt-20 px-4 sm:px-8 lg:px-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
          {/* Left Column - Premium Content */}
          <div className="lg:w-1/2 space-y-8">
            {/* Main Header */}
            <div className="space-y-3">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-3">Follow Our Journey</h2>
              <div className="w-24 h-1 bg-black rounded-full"></div>
            </div>

            {/* Instagram Teaser */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <i className="fa-brands fa-instagram text-white text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold text-black">@Hexashop</p>
                  <p className="text-gray-500 text-sm">12.5k followers</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Discover our latest drops, styling tips, and exclusive collections. 
                Join 12.5k+ fashion lovers!
              </p>
              <a 
                href="https://instagram.com/hexashop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-black hover:text-gray-700 transition-colors"
              >
                <i className="fa-brands fa-instagram"></i>
                View Instagram
              </a>
            </div>

            {/* Premium Newsletter */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">
                  Get <span className="text-black font-black">30% OFF</span>
                </h3>
                <p className="text-gray-600">Join 50k+ subscribers for exclusive offers</p>
              </div>
              
              <form
                className="space-y-4"
                autoComplete="off"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for subscribing! 🎉');
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-100 transition-all duration-300"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-100 transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                  Subscribe Now
                </button>
              </form>
            </div>

            {/* Clean Store Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <i className="fa-solid fa-store text-black"></i>
                Store Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <i className="fa-solid fa-map-marker-alt text-black mt-1"></i>
                  <div>
                    <strong className="text-black block">Casablanca, Morocco</strong>
                    <p className="text-gray-600 text-sm">456 Avenue Mohammed V</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <i className="fa-solid fa-phone text-black"></i>
                  <span className="font-semibold text-black">+212 10-020-0340</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <i className="fa-solid fa-envelope text-black"></i>
                  <a href="mailto:info@company.com" className="font-semibold text-black hover:text-gray-700 transition-colors">info@company.com</a>
                </div>
                
                {/* Minimal Social Links */}
                <div className="pt-4">
                  <p className="font-semibold text-black mb-3 flex items-center gap-2">
                    <i className="fa-solid fa-share-nodes text-black"></i>
                    Connect With Us
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: 'fa-brands fa-facebook', href: 'https://facebook.com' },
                      { icon: 'fa-brands fa-instagram', href: 'https://instagram.com' },
                      { icon: 'fa-brands fa-behance', href: 'https://behance.net' },
                      { icon: 'fa-brands fa-linkedin', href: 'https://linkedin.com' }
                    ].map(({ icon, href }, i) => (
                      <a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl font-semibold text-black border border-gray-200 hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md"
                      >
                        <i className={icon}></i>
                        <span className="hidden sm:inline">Follow</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Elegant Instagram Gallery */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Gallery Header */}
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-black">Latest Posts</h3>
                <a 
                  href="https://instagram.com/hexashop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-gray-700 transition-colors"
                >
                  View All <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              {/* Clean 3x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                {instagramImages.map((imgSrc, index) => (
                  <div
                    key={index}
                    className={`
                      relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100
                      ${index === 1 ? 'row-span-2 h-96 sm:h-auto' : 'h-48 sm:h-56'}
                    `}
                  >
                    <img
                      src={imgSrc}
                      alt={`Instagram ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Minimal Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-white">
                          <i className="fa-regular fa-heart"></i>
                          <span className="font-semibold">{Math.floor(Math.random() * 500) + 100}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                          <i className="fa-regular fa-comment"></i>
                          <span className="font-semibold">{Math.floor(Math.random() * 50) + 10}</span>
                        </div>
                      </div>
                      
                      {/* Clean Follow Button */}
                      <a
                        href="https://instagram.com/hexashop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <i className="fa-brands fa-instagram"></i>
                        Follow
                      </a>
                    </div>

                    {/* Corner Badge for first image */}
                    {index === 0 && (
                      <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-bold text-black shadow-md">
                        NEW
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}