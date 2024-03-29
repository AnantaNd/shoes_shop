import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Styles from './ContainerProduct.module.css';

const DynamicCard = dynamic(() => import('../Card/Card'), {
  loading: () => <p>loading....</p>,
});

function ContainerProduct({
  dataCard, title, label, img, subLabel,
}) {
  const swiperRef = useRef();

  const dotPrice = (numb) => numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const priceDisc = (numb, disc) => {
    const temp = (numb * disc) / 100;
    return parseInt(numb - temp);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h1 className={Styles.titleHeader}>{title}</h1>
        <div className={Styles.navigation}>
          <div className={Styles.container_arrow} onClick={() => swiperRef.current?.slidePrev()}>
            <MdNavigateBefore size={24} className={Styles.prev_arrow}>Prev</MdNavigateBefore>
          </div>
          <div className={Styles.container_arrow} onClick={() => swiperRef.current?.slideNext()}>
            <MdNavigateNext size={24} className={Styles.next_arrow}>Next</MdNavigateNext>
          </div>
        </div>
      </div>
      <div className={Styles.container_collection}>
        <div className={Styles.background_collection} style={{ backgroundImage: `url(${img})` }}>
          <h1 className={Styles.title}>
            {label}
            <span>
              <br />
              {subLabel}
            </span>
          </h1>
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
                spaceBetween: 10,
              },
              414: {
                slidesPerView: 1,
                width: 400,
              },
              360: {
                slidesPerView: 1,
                width: 360,
              },
            }
          }
          slidesPerView={4}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {dataCard?.map((data, idx) => (
            <SwiperSlide key={idx} className={Styles.product}>
              <DynamicCard
                idProduct={data.id}
                tagNew={data.tag}
                disc={data.discount}
                name={data.name}
                brand={data.brand}
                img={data.img}
                price={dotPrice(data.price)}
                priceAftDisc={dotPrice(priceDisc(data.price, data.discount))}
                ratting={data.rating}
                dataSize={data.size}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ContainerProduct;
