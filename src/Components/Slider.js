import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

import slider from "../data/slider.json";
import Container from "./Container";

const Slider = () => {
  return (
    <div className="w-full relative before:absolute before:w-full before:h-full before:bg-black before:z-30 before:opacity-40 ">
      <div className="w-full h-[650px] overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 1200,
          }}
        >
          {slider.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <img className="w-full" src={item.img} alt={item.alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="absolute w-full bottom-20 z-30">
        <Container>
          <h1 className="text-5xl font-bold text-white">
            January 2023{" "}
            <span className="bg-white text-red-600 p-2">@ GITAM</span>
          </h1>
        </Container>
      </div>
    </div>
  );
};

export default Slider;
