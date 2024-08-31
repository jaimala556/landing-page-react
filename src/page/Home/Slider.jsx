import React, { useState } from "react";
import Java from "./images/java.png";
import Python from "./images/python.png";
import JS from "./images/js.jpeg";
import ReactJsImg from "./images/react.jpeg";

export default function Slider() {
  const imageAddress = [Java, Python, JS, ReactJsImg];

  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  const nextSlide = () => {
    const nextIndex = (activeSlide + 1) % imageAddress.length;
    setActiveSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      (activeSlide - 1 + imageAddress.length) % imageAddress.length;
    setActiveSlide(prevIndex);
  };

  return (
    <div
      id="indicators-carousel"
      className="relative w-full mb-4  border-slate-300 dark:border-slate-400 "
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56  overflow-hidden object-cover rounded-lg md:h-96">
        {/* Render each carousel item based on activeSlide */}
        {imageAddress.map((image, index) => (
          <div
            key={index}
            className={`duration-700 p-4 ease-in-out ${
              index === activeSlide ? "" : "hidden"
            }`}
            data-carousel-item={index === activeSlide ? "active" : ""}
          >
            <img
              src={image}
              className="absolute block w-full h5/6 my-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slider ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {imageAddress.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeSlide ? "bg-blue-700" : "bg-gray-300"
            }`}
            aria-current={index === activeSlide ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev=""
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-600 dark:bg-gray-400 group-hover:bg-white/50 dark:group-hover:bg-slate-300/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next=""
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-600 dark:bg-gray-400 group-hover:bg-white/50 dark:group-hover:bg-slate-300/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
