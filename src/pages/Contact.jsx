import React from 'react';

export default function Contact() {
  return (
    <section className="pt-20 mt-12  pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get in Touch</h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Have questions or want to work with us? Fill out the form below or contact us directly.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Message" 
                rows="5" 
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info + Map */}
        <div className="flex flex-col justify-between gap-8">
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-gray-600">info@hexashop.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-gray-600">+212 10-020-0340</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-gray-600">Casablanca, Morocco</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
              <p className="text-gray-600">Facebook | Instagram | Twitter</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
            <iframe 
              title="Map" 
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.422303829956!2d-7.6185!3d33.5899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9b7a1a04e3c2ef%3A0x7f0f5a5e6319c9b5!2sCasablanca!5e0!3m2!1sen!2sma!4v1600000000000!5m2!1sen!2sma" 
              frameBorder="0" 
              allowFullScreen="" 
              aria-hidden="false" 
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
