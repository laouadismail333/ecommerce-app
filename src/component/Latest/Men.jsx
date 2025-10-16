import { useState, useEffect } from 'react'
import productsData from '../../data/product'
import next from '../../assets/images/next.png'
import prev from '../../assets/images/prev.png'

export default function Men() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  // Filter ONLY men's data
  const mensWear = productsData.filter(item => item.category === "Men")

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3)
      else if (window.innerWidth >= 768) setItemsPerView(2)
      else setItemsPerView(1)
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const totalSlides = Math.ceil(mensWear.length / itemsPerView)
  const startIndex = currentIndex * itemsPerView
  const visibleItems = mensWear.slice(startIndex, startIndex + itemsPerView)

  const handleNext = () => setCurrentIndex(prev => (prev + 1) % totalSlides)
  const handlePrev = () => setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides)
  const handleQuickView = (item) => console.log('Quick view:', item.title)
  const handleAddToCart = (item) => console.log('Added to cart:', item.title)
  const handleShopNow = (item) => console.log('Shop now:', item.title)

  return (
    <section className='text-center mt-20 pt-9 pb-10 border-b-2 border-dotted border-gray-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <header className='mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Men's Latest
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Discover our latest collection of men's fashion, perfect for every occasion.
          </p>
        </header>

        <div className='relative'>
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className='absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white shadow-lg rounded-full flex items-center justify-center z-10 transition-all duration-300 hover:scale-110'
          >
            <img src={prev} alt="Previous" className='w-6 h-6' />
          </button>

          <button
            onClick={handleNext}
            className='absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white shadow-lg rounded-full flex items-center justify-center z-10 transition-all duration-300 hover:scale-110'
          >
            <img src={next} alt="Next" className='w-6 h-6' />
          </button>

          {/* Items Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {visibleItems.map(item => (
              <article key={item.id} className='group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
                {/* Image Container */}
                <div className='relative h-96 overflow-hidden'>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700' 
                    loading="lazy"
                  />
                  
                  {/* Label Badge */}
                  {item.label && (
                    <span className='absolute top-4 left-4 bg-white/90 text-black text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide'>
                      {item.label}
                    </span>
                  )}

                  {/* Quick Action Buttons - FIXED POSITION */}
                  <div className='absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                    <button 
                      onClick={() => handleQuickView(item)} 
                      className='w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white shadow-lg transition-all duration-200 hover:scale-110'
                    >
                      <i className="fa-solid fa-eye text-gray-700 text-lg"></i>
                    </button>
                    <button 
                      onClick={() => handleAddToCart(item)} 
                      className='w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white shadow-lg transition-all duration-200 hover:scale-110'
                    >
                      <i className="fa-solid fa-cart-shopping text-gray-700 text-lg"></i>
                    </button>
                  </div>
                </div>

                {/* Product Info - WITH SHOP NOW BUTTON */}
                <div className='p-6 relative'>
                  {/* Overlay Shop Now Button */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 pointer-events-none'>
                    <button 
                      onClick={() => handleShopNow(item)}
                      className='px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 shadow-lg pointer-events-auto ml-auto'
                    >
                      Shop Now
                      <i className="fa-solid fa-arrow-right text-sm"></i>
                    </button>
                  </div>

                  {/* Static Info */}
                  <h3 className='text-lg font-semibold text-gray-900 mb-1'>{item.title}</h3>
                  <p className='text-xl font-bold text-gray-900 mb-2'>{item.price}</p>
                  <span className='inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full uppercase tracking-wide'>
                    {item.category}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Dots */}
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
              />
            ))}
          </div>

          <p className='text-sm text-gray-500 mt-4'>
            Slide {currentIndex + 1} of {totalSlides}
          </p>
        </div>
      </div>
    </section>
  )
}