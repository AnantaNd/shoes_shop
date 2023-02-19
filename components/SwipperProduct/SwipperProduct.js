import React, { useCallback, useRef } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import Card from '../Card/Card';
import Styles from './SwipperProduct.module.css';



// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SwipperProduct({ dataCard }) {
  const swiperRef = useRef();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        {/* <br></br> */}
        <h1 className={Styles.titleHeader}>Products</h1>
        <div className={Styles.navigation}>
          <div className={Styles.container_arrow} onClick={() => swiperRef.current?.slidePrev()}>
            <MdNavigateBefore size={24} className={Styles.prev_arrow} >Prev</MdNavigateBefore>
          </div>
          <div className={Styles.container_arrow} onClick={() => swiperRef.current?.slideNext()}>
            <MdNavigateNext size={24} className={Styles.next_arrow} >Next</MdNavigateNext>
          </div>
        </div>
      </div>
      <div className={Styles.container_collection}>
        <Swiper
          className={Styles.collections}
          breakpoints={
            {
              1280: {
                slidesPerView: 3,
                width: 835,
              },
              768: {
                slidesPerView: 2,
                width: 700
              },
              414: {
                slidesPerView: 1,
                width: 300,
              },
              360:{
                slidesPerView: 1,
                width: 390,
              }
            }
          }
          slidesPerView={4}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {dataCard.map((data, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Card
                  idProduct={data.id}
                  name={data.name}
                  disc={data.discount}
                  img={data.img}
                  price={data.price}
                  ratting={data.rating}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default SwipperProduct
