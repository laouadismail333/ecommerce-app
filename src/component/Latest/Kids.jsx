import { useState } from 'react'
import kid01 from '../../assets/images/kid-01.jpg'
import kid02 from '../../assets/images/kid-02.jpg'
import kid03 from '../../assets/images/kid-03.jpg'
import next from '../../assets/images/next.png'
import prev from '../../assets/images/prev.png'

export default function Kids() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const kidsWear = [
    { 
      id: 'playful-tshirt', 
      img: kid01, 
      title: "Playful T-Shirt", 
      price: "$29.99", 
      subtitle: "Fun prints for everyday play",
      category: "Tops"
    },
    { 
      id: 'denim-shorts', 
      img: kid02, 
      title: "Denim Shorts", 
      price: "$34.99", 
      subtitle: "Comfortable and stylish for summer",
      category: "Bottoms"
    },
    { 
      id: 'rainbow-dress', 
      img: kid03, 
      title: "Rainbow Dress", 
      price: "$39.99", 
      subtitle: "Colorful and bright for happy days",
      category: "Dresses"
    },
  ]

  const itemsPerView = 3
  const totalSlides = Math.ceil(kidsWear.length / itemsPerView)

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % totalSlides)
  }

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleQuickView = (item) => {
    console.log('Quick view:', item.title)
  }

  const handleAddToCart = (item) => {
    console.log('Added to cart:', item.title)
  }

  const handleShopNow = (item) => {
    console.log('Shop now:', item.title)
  }

  const startIndex = currentIndex * itemsPerView
  const visibleItems = kidsWear.slice(startIndex, startIndex + itemsPerView)

  return (
    <section 
      className='text-center pt-9 pb-10 border-b-2 border-dotted border-gray-300'
      aria-labelledby="kids-latest-heading"
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <header className='mb-12'>
          <h2 
            id="kids-latest-heading"
            className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'
          >
            Kids' Latest
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Explore our newest kids' fashion, perfect for playtime and adventures.
          </p>
        </header>
        
        {/* Carousel Container */}
        <div className='relative'>
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className='absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white shadow-lg rounded-full flex items-center justify-center z-10 transition-all duration-300 hover:scale-110'
            aria-label="Previous items"
          >
            <img src={prev} alt="Previous" className='w-6 h-6 mr-3' />
          </button>
          
          <button
            onClick={handleNext}
            className='absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white shadow-lg rounded-full flex items-center justify-center z-10 transition-all duration-300 hover:scale-110'
            aria-label="Next items"
          >
            <img src={next} alt="Next" className='w-6 h-6 ml-3' />
          </button>

          {/* Items Grid - Shows 3 items */}
          <div 
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
            role="list"
          >
            {visibleItems.map((item) => (
              <article 
                key={item.id}
                className='group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'
                role="article"
                aria-labelledby={`product-${item.id}-title`}
              >
                {/* Image Container */}
                <div className='relative h-96 overflow-hidden'>
                  <img 
                    src={item.img} 
                    alt={`${item.title} - ${item.subtitle}`}
                    className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700'
                    loading="lazy"
                    width={400}
                    height={384}
                  />
                  
                  {/* Quick Action Buttons */}
                  <div className='absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                    <button
                      onClick={() => handleQuickView(item)}
                      className='w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white shadow-lg transition-all duration-200'
                      aria-label={`Quick view ${item.title}`}
                    >
                      <i className="fa-solid fa-eye text-gray-700 text-lg"></i>
                    </button>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className='w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white shadow-lg transition-all duration-200'
                      aria-label={`Add ${item.title} to cart`}
                    >
                      <i className="fa-solid fa-cart-shopping text-gray-700 text-lg"></i>
                    </button>
                  </div>
                </div>

                {/* Overlay Info */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6'>
                  <div>
                    <span className='inline-block bg-black/20 text-white text-xs px-2 py-1 rounded-full uppercase tracking-wide font-medium mb-2'>
                      {item.category}
                    </span>
                    <h3 
                      id={`product-${item.id}-title`}
                      className='text-xl font-bold text-white mb-2 leading-tight'
                    >
                      {item.title}
                    </h3>
                    <p className='text-gray-200 text-sm mb-3 leading-relaxed'>
                      {item.subtitle}
                    </p>
                    <div className='flex items-center justify-between'>
                      <span className='text-2xl font-bold text-white'>
                        {item.price}
                      </span>
                      <button
                        onClick={() => handleShopNow(item)}
                        className='px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 shadow-lg'
                      >
                        Shop Now
                        <i className="fa-solid fa-arrow-right text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Static Card Info */}
                <div >
                  <h3 className='text-lg font-semibold text-gray-900 mb-1 sr-only'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-gray-600 mb-2 sr-only'>
                    {item.subtitle}
                  </p>
                  <p className='text-xl font-bold text-gray-900 sr-only'>
                    {item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className='flex justify-center mt-8 space-x-2'>
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <p className='text-sm text-gray-500 mt-4'>
            Slide {currentIndex + 1} of {totalSlides}
          </p>
        </div>
      </div>
    </section>
  )
}