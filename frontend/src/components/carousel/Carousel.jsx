
import React, { useRef, useState,useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carousel() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      const totalSlides = swiperInstance.slides.length;

      const autoplayInterval = setInterval(() => {
        const currentSlide = swiperInstance.activeIndex;

        if (currentSlide === 0) {
          swiperInstance.slideTo(totalSlides - 1);
        } else {
          swiperInstance.slideTo(currentSlide - 1);
        }
      }, 4000);

      return () => {
        clearInterval(autoplayInterval);
      };
    }
  }, []);

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 60,
          stretch: 2,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        ref={swiperRef}
      >
        <SwiperSlide>
          <img src="/grocery-images/spices/cloves.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/fruits/Bananas.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/rice/jasmine.jpg" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/spices/coriander.jpg" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/spices/Turmeric-1.jpg" alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/spices/Ginger.jpg" alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/staple-foods/barley.jpg" alt="Slide 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/vegetables/okra.jpeg" alt="Slide 8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/vegetables/green-beans.jpg" alt="Slide 9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/spices/cinnamon.jpg" alt="Slide 10" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/spices/Star-Anise.jpg" alt="Slide 11" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/rice/parboiled.jpg" alt="Slide 12" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/grocery-images/fruits/mango.jpg" alt="Slide 13" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}