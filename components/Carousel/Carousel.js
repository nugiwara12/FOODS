"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  // Add a null check for slides
  if (!slides || !Array.isArray(slides) || slides.length === 0) {
    return null; // Or render a message indicating no slides
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-2 rounded-full shadow text-gray-800"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full shadow text-gray-800"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      <div className="flex justify-center my-4">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all duration-300 ease-in-out rounded-full
                            ${
                              curr === i
                                ? "w-6 h-3 bg-yellow-600"
                                : "w-3 h-3 bg-yellow-400 bg-opacity-50"
                            }
                            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
