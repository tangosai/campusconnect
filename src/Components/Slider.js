import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

import slider from "../data/slider.json";

const Slider = () => {
  return (
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
        {/* <SwiperSlide>
          <img className="w-full" src="../../img/gitam_campus_connect_1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="../../img/gitam_campus_connect_1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="../../img/gitam_campus_connect_1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="../../img/gitam_campus_connect_1.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
