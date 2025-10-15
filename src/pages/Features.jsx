import React from "react";
import { FaShippingFast, FaGem, FaLock, FaHeadset } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaShippingFast size={30} className="text-white" />,
      title: "Fast Shipping",
      description: "Get your orders delivered quickly and safely, anywhere you are.",
      color: "bg-blue-500",
    },
    {
      icon: <FaGem size={30} className="text-white" />,
      title: "Premium Quality",
      description: "Only the finest materials and designs for our customers.",
      color: "bg-pink-500",
    },
    {
      icon: <FaLock size={30} className="text-white" />,
      title: "Secure Payments",
      description: "Your transactions are 100% secure with encryption technology.",
      color: "bg-green-500",
    },
    {
      icon: <FaHeadset size={30} className="text-white" />,
      title: "24/7 Support",
      description: "Our team is here to help you any time, any day.",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="pt-20 pb-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Why Choose Us
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Discover the key features that make our store stand out from the rest.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer"
          >
            <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${feature.color}`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
