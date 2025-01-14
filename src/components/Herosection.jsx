'use client';

import { useState } from 'react';
import Link from 'next/link';

const Herosection = () => {
  const images = [
    '/sliders/slider1.jpg',
    '/sliders/slider2.jpg',
    '/sliders/slider3.jpg',
    '/sliders/slider4.jpg',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      {/* Slider Section */}
      <div className="relative h-screen">
        <div className="flex flex-col h-full">
          <div className="relative h-1/2 w-full bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            <div className="relative z-10 w-full h-full flex justify-center items-center">
              <div className="w-full h-full max-w-full mx-auto overflow-hidden relative">
                <div
                  className="flex transition-transform duration-500"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                      <img
                        src={image}
                        alt={`slide-${index}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Slider Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                >
                  &#8249;
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>

          {/* Hero Section (Bottom Half of the Screen) */}
          <div className="relative h-1/2 flex flex-col justify-center items-center text-center text-white px-6 sm:px-10 bg-gray-800">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Welcome to Our Grocery Store
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              Your One-Stop Shop for Fresh and Quality Produce
            </p>
            <Link href="/products">
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Herosection;
