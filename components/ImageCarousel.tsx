import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      transitionToNextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const transitionToNextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 300);
  };

  const goToPrevious = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(false);
    }, 300);
  };

  const goToNext = () => {
    transitionToNextSlide();
  };

  return (
    <div className="relative w-full md:w-[65%] mx-auto">
      <div className="relative overflow-hidden rounded-lg" style={{ paddingTop: '60%' }}>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
        />
        
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-sans mb-2 shadow-text">
            {images[currentIndex].title}
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-gray-200 line-clamp-3 shadow-text">
            {images[currentIndex].caption}
          </p>
        </div>
        
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="mt-4 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;