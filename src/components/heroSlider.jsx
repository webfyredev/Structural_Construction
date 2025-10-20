// src/components/HeroSlider.jsx
import React from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { FaChevronRight } from "react-icons/fa";

import { motion } from "framer-motion";
import { cardHover, cardTaps } from "../animations/motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider1 from '../images/slider/sm1.webp'
import slider2 from '../images/slider/sm9.webp'
import slider3 from '../images/slider/sm5.webp'


const slides = [
  {
  id: 1,
  image: slider1,
  align: "left",
  sbtitle: "Construction",
  title1: "We deliver outstanding",
  title2: "construction solutions worldwide.",
  desc:
    "Our mission is to bring innovation, strength, and reliability into every project, ensuring quality that stands for generations.",
},
{
  id: 2,
  image: slider2,
  align: "center",
  sbtitle: "Projects",
  title1: "We are experts in modern",
  title2: "building and infrastructure projects.",
  desc:
    "With a team of skilled professionals, we handle projects of all scales, delivering excellence through planning and precision.",
},
{
  id: 3,
  image: slider3,
  align: "right",
  sbtitle: "Innovation",
  title1: "We are redefining standards",
  title2: "in construction and design.",
  desc:
    "Every project reflects our passion for innovation, sustainability, and craftsmanship that transforms visions into reality.",
},
];

function SlideInner({ slide }) {
  // useSwiperSlide returns an object; read isActive safely
  const slideState = useSwiperSlide();
  const isActive = !!slideState && !!slideState.isActive;

  const alignMap = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div
      className="relative w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div
        className={`relative z-10 h-full flex flex-col justify-center px-6 lg:px-24 ${alignMap[slide.align]}`}
      >
        <motion.h3
          className="text-[#F5A623] text-sm md:text-xl mb-2"
          initial={{ opacity: 0, y: -8 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.5 }}
        >
          {slide.sbtitle}
        </motion.h3>

        <motion.h1
          className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, x: -40 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          {slide.title1}
        </motion.h1>

        <motion.h1
          className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, x: -40 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          {slide.title2}
        </motion.h1>

        <motion.p
          className="text-sm md:text-base max-w-xl mb-6 text-white"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {slide.desc}
        </motion.p>

        <motion.a
          href="#projects"
          className="bg-linear-to-r from-orange-500 to-orange-400 hover:bg-[#E59400] px-8 py-3 rounded-lg text-white font-medium flex"
          initial={{ opacity: 0, y: 12 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ delay: 0.85, duration: 0.5 }} whileHover={{scale:1.05}} whileTap={{scale:0.95}}
        >
          View Projects <FaChevronRight  className="mt-1.5 ml-1"/>
        </motion.a>
      </div>
    </div>
  );
}

export default function HeroSlider() {
  return (
    <section className="w-full min-h-[80vh]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="h-[90vh]"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <SlideInner slide={s} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
