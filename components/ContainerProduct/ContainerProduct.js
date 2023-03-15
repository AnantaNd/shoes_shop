import React, { useCallback, useRef } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import Card from '../Card/Card';
import Styles from './ContainerProduct.module.css';



// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ContainerProduct({ dataCard, title, label, img, subLabel }) {
  const swiperRef = useRef();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const dotPrice =(numb)=>{
    return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
  const priceDisc=(numb, disc)=>{
    const temp = numb/disc
    // console.log(temp)
    return parseInt(numb-temp)
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h1 className={Styles.titleHeader}>{title}</h1>
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
        <div className={Styles.background_collection} style={{ backgroundImage: `url(${img})` }} >
          <h1 className={Styles.title}>{label}<span><br></br>{subLabel}</span></h1>
          {/* <CountDown/> */}
        </div>
        <Swiper
          className={Styles.collections}
          breakpoints={
            {
              1280: {
                slidesPerView: 3,
                width: 800,
              },
              768: {
                slidesPerView: 2,
                width: 760,
                spaceBetween: 50
              },
              414: {
                slidesPerView: 1,
                width: 400,
              },
              360:{
                slidesPerView: 1,
                width: 360,
              }
            }
          }
          slidesPerView={4}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {dataCard?.map((data, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Card
                  idProduct={data.id}
                  disc={data.discount}
                  name={data.name}
                  img={data.img}
                  price={dotPrice(data.price)}
                  priceAftDisc={dotPrice(priceDisc(data.price, data.discount))}
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

export default ContainerProduct
