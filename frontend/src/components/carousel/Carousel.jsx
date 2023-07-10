import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <>
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
          <img src="/grocery-images/spices/cloves.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/fruits/pineapple2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/rice/jasmine.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/spices/coriander.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/spices/Turmeric-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/spices/Ginger.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/staple-foods/barley.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/vegetables/okra.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/vegetables/green-beans.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
