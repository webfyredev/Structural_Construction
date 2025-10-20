import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import testbg1 from '../images/header/header (3).jpg'

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "John Adewale",
      role: "Project Manager, BuildRight Ltd.",
      message:
        "Working with them was seamless from start to finish. The team delivered quality and professionalism on every level.",
      image: testbg1,
    },
    {
      name: "Caroline Udo",
      role: "Homeowner, Abuja",
      message:
        "They turned my dream home into reality. I’m impressed by their dedication, communication, and craftsmanship.",
      image: testbg1,

    },
    {
      name: "Kelvin Musa",
      role: "CEO, Skyline Constructions",
      message:
        "A company that truly values excellence. Their structures speak of quality and innovation.",
      image: testbg1,

    },
    {
      name: "Ngozi James",
      role: "Property Developer, Lagos",
      message:
        "Every project handled with care and precision. You can feel their passion in every detail.",
      image: testbg1,

    },
  ];

  return (
    <section className="bg-gray-50 py-20" id="testimonials">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-orange-500">
          Client Reviews
        </h3>
        <p className="text-gray-600 mt-2">
          Hear from clients who have trusted us to build their vision.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-12"
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 h-full flex flex-col justify-between">
                <FaQuoteLeft className="text-3xl text-orange-500 mb-4" />
                <p className="text-gray-600 italic leading-relaxed mb-6">
                  “{testi.message}”
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testi.image}
                    alt={testi.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-orange-500"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testi.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testi.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
