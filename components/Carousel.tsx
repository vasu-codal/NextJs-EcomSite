"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
interface img {
  altText: string;
  src: string;
}

interface CarouselProps {
  slides: Array<img>;
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlider, setCurrentSlider] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });

  const previousSlide = () => {
    setCurrentSlider((prevState) =>
      prevState === 0 ? slides?.length - 1 : prevState - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlider((prevState) =>
      prevState === slides?.length - 1 ? 0 : prevState + 1
    );
  };

  return (
    <div className="relative max-h-[200px]  md:max-h-[350px] overflow-hidden">
      <div
        className=" flex flex-row  w-full ease-out duration-500"
        style={{
          transform: `translateX(-${currentSlider * 100}%)`,
        }}
      >
        {slides.map((img) => {
          return (
            <span key={img?.altText} className="min-w-full">
              <Image
                src={img?.src}
                alt={img?.altText}
                // unoptimized
                width={0}
                height={0}
                quality={70}
                sizes="100vw"
                className="w-full h-[350px] object-cover"
              />
            </span>
          );
        })}
      </div>
      <div className="absolute top-[50%] w-full flex items-center justify-between px-7 text-xl text-slate-400 ">
        <span
          className="hover:text-slate-300 cursor-pointer"
          onClick={previousSlide}
        >
          <FaChevronCircleLeft />
        </span>
        <span
          className="hover:text-slate-300 cursor-pointer"
          onClick={nextSlide}
        >
          <FaChevronCircleRight />
        </span>
      </div>
    </div>
  );
};

export default Carousel;
