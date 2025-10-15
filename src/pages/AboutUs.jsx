import aboutUs from '../assets/images/about-us-page-heading.jpg'
import aboutLeft from '../assets/images/about-left-image.jpg'
import teamMember1 from '../assets/images/team-member-01.jpg'
import teamMember2 from '../assets/images/team-member-02.jpg'
import teamMember3 from '../assets/images/team-member-03.jpg'

export default function AboutUs() {
  return (
    <section className="mt-20">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <img src={aboutUs} alt="About Us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold">About Us</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 flex flex-col lg:flex-row gap-12">
        {/* Left Image */}
        <div className="lg:w-1/2">
          <img 
            src={aboutLeft} 
            alt="About Our Store" 
            className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Text */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Our Store</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Hexashop, your number one source for all things fashion. We're dedicated to providing you the very best of clothing, with an emphasis on quality, customer service, and uniqueness.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2020, Hexashop has come a long way from its beginnings. When we first started out, our passion for eco-friendly fashion drove us to start our own business.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <p className="text-gray-600">
            Sincerely, <br /> <span className="font-semibold">The Hexashop Team</span>
          </p>

        </div>
      </div>
      {/* Team Section */}
      <div className="mt-20 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <div className="inline-block w-16 h-1 bg-black rounded-full mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet Our Amazing Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
            {[ 
              {img: teamMember1, name: 'Maria Lee', role: 'Lead Designer'},
              {img: teamMember2, name: 'Alex Johnson', role: 'Founder & CEO'},
              {img: teamMember3, name: 'James Smith', role: 'Marketing Head'}
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full shadow-lg mb-4" />
                <p className="font-semibold text-gray-800">{member.name}</p>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Community Section */}
      <div className="mt-16 bg-black text-white py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Join Our Community</h2>
          <p className="text-gray-200 text-lg">
            Stay updated with the latest trends, exclusive offers, and events. Subscribe to our newsletter and follow us on social media!
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  )
}
