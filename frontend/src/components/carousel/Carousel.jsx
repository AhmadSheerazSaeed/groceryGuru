import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";





import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

import { EffectCoverflow, Pagination } from "swiper";

export default function Carousel() {
  return (
    <div className="h-600 w-full absolute">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/avocado.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={} />
        </SwiperSlide>
        <SwiperSlide>
          <img src=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
