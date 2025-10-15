import whiteLog from '../assets/images/white-logo.png';
import { 
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube, 
  FaPhone, FaEnvelope, FaMapMarkerAlt 
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <img src={whiteLog} alt="Hexashop" className="h-10 w-auto" />
            <p className="text-gray-400 leading-relaxed max-w-md">
              Discover timeless elegance with Hexashop. 
              Quality fashion for modern lifestyles.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, href: 'https://facebook.com' },
                { icon: FaInstagram, href: 'https://instagram.com' },
                { icon: FaTwitter, href: 'https://twitter.com' },
                { icon: FaYoutube, href: 'https://youtube.com' }
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                >
                  <Icon className="text-white text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Shop', 'About', 'Contact', 'Returns'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Customer Service</h3>
            <ul className="space-y-3">
              {['Help Center', 'Shipping Info', 'Track Order', 'Size Guide'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <FaPhone className="text-white" />
                <span>+212 10-020-0340</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-white" />
                <a href="mailto:info@hexashop.com" className="hover:text-white transition-colors">info@hexashop.com</a>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white mt-1" />
                <span>456 Avenue Mohammed V, Casablanca, Morocco</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-black py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-white">Stay Updated</h3>
            <p className="text-gray-400">Subscribe for exclusive offers & new arrivals</p>
            <form 
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for subscribing! 🎉');
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Hexashop. All rights reserved. | Made with ❤️ in Morocco
          </p>
        </div>
      </div>
    </footer>
  );
}