// src/components/PartnersSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import logo1 from "../images/logo/sponsor (1).jpg";
import logo2 from "../images/logo/sponsor (6).jpg";
import logo3 from "../images/logo/sponsor (3).jpg";
import logo4 from "../images/logo/sponsor (4).jpg";
import logo5 from "../images/logo/sponsor (5).jpg";
import logo6 from "../images/logo/sponsor (6).jpg";
import { motion } from "framer-motion";
import { scrollUp, scrollUpNext } from "../animations/motion";


const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function PartnersSlider() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto text-center mb-10 px-6">
        <motion.h2 {...scrollUp} className="h-10 text-3xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text">Trusted by Leading Brands</motion.h2>
        <motion.p {...scrollUpNext} className="text-gray-600 text-sm">We’ve collaborated with top companies to deliver world-class construction projects.</motion.p>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={3000}
        allowTouchMove={false}
        className="w-full"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="md:w-[80%] w-[60%] h-20 md:h-30 transition-all duration-300 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
