import React, { useRef } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import Styles from './HeroSlide.module.css';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HeroSlide({ section }) {
  const swiperRef = useRef();

  return (
    <div className={Styles.banner}>
      <Swiper
        className={Styles.swiper}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <img className={Styles.image} src="/background.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={Styles.image} src="/banner2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={Styles.image} src="/banner.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={Styles.image} src="/banner2.jpeg" />
        </SwiperSlide>

      </Swiper>
      <div className={Styles.navigation}>
        <div className={Styles.container_arrow} onClick={() => swiperRef.current?.slidePrev()}>
          <MdNavigateBefore className={Styles.prev_arrow}>Prev</MdNavigateBefore>
        </div>
        <div className={Styles.container_arrow} onClick={() => swiperRef.current?.slideNext()}>
          <MdNavigateNext className={Styles.next_arrow}>Next</MdNavigateNext>
        </div>
      </div>
    </div >
  )
}

export default HeroSlide
