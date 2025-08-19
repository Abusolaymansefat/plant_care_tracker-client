import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      img: "https://i.ibb.co/4Rzbp1Tt/Aloe-Vera-Plant-Care-Growing-Guide-jpj-1-0786b3ce-c2e9-4c18-8a6d-c24476ac0d92.webp",
      desc: "Perfect for indoor decoration and health benefits."
    },
    {
      id: 2,
      name: "Snake Plant",
      img: "https://i.ibb.co/V0HHrcZx/Snake-Plant.jpg",
      desc: "Low maintenance and air-purifying plant."
    },
    {
      id: 3,
      name: "Peace Lily",
      img: "https://i.ibb.co/spsfbRF2/Peace-Lily.jpg",
      desc: "Beautiful flowering plant for homes and offices."
    },
  ];

  return (
    <section className="py-10 px-4 md:px-10 rounded-2xl shadow-lg">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="rounded-2xl overflow-hidden"
      >
        {plants.map((plant) => (
          <SwiperSlide key={plant.id}>
            <div
              className="h-[450px] md:h-[550px] flex items-center justify-center bg-cover bg-center rounded-2xl relative"
              style={{ backgroundImage: `url(${plant.img})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

              {/* Centered Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-center px-6 md:px-16 text-white max-w-2xl"
              >
                <h3 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                  {plant.name}
                </h3>
                <p className="mt-4 text-lg md:text-xl text-gray-200">
                  {plant.desc}
                </p>
                <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-2xl shadow-md hover:bg-green-700 transition">
                  Shop Now
                </button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
