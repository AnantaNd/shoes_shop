import Link from 'next/link';
import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import style from './CardDetail.module.css';

export default function CardDetail({
  title, rating, price, priceAftDisc, discount, desc, sizeData, onSize, btnDisable, helper, onInputAddr, helperAddr, onBtnAction,
}) {
  const [showShipping, setShowShipping] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const handleShowShipping = () => {
    setShowShipping(!showShipping);
    setShowDetail(false);
  };

  const handleShowDetail = () => {
    setShowDetail(!showDetail);
    setShowShipping(false);
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>{title}</h1>
        {!discount ? ''
          : (
            <div className={style.wrapper_discount}>
              <p className={style.price}>
                Rp.
                {price}
              </p>
              <div className={style.container_discount}>
                <p className={style.discount}>
                  {discount}
                  {' '}
                  % OFF
                </p>
              </div>
            </div>
          )}
        {!discount
          ? (
            <h1 className={style.priceDiscount}>
              Rp.
              {price}
            </h1>
          )
          : (
            <h1 className={style.priceDiscount}>
              Rp.
              {priceAftDisc}
            </h1>
          )}
        <p className={style.rating}>
          rating :
          {rating}
        </p>
        <h1 className={style.title}>Available Size</h1>
        <Link href="/size-chart" passHref>
          <a target="_blank" style={{ textDecoration: 'none' }}>
            <p className={style.linkSize}>&#40;click for size guide&#41;</p>
          </a>
        </Link>
        <div className={style.sizeWrapper}>
          <select className={style.selectSize} name="size" onChange={onSize}>
            <option value="">Select Size &hellip;</option>
            {sizeData?.map((size, i) => (
              <option key={i} value={size}>{size}</option>
            ))}
          </select>
        </div>
        {!helper ? <small className={style.helper}>*choose your size first</small> : ''}
        <div>
          <form>
            <h1 className={style.title}>Address</h1>
            <textarea className={style.inpAddr} placeholder="input your address for shipping" onChange={onInputAddr} />
            {!helperAddr ? <small className={style.helper}>*input your address</small> : ''}
          </form>
        </div>
        <div className={style.container_btn}>
          <button onClick={onBtnAction} disabled={btnDisable} className={helper && helperAddr ? `${style.btn_buy}` : `${style.btn_buyDisable}`}>Buy</button>
          <Link href="/products/">
            <button className={style.btn_back}>Back</button>
          </Link>
        </div>
        <div className={style.container_desc}>
          <div className={style.wrapper}>
            <h1 className={style.title}>Product Description</h1>
            {!showDetail
              ? <BiChevronDown style={{ cursor: 'pointer', marginTop: '10px' }} onClick={handleShowDetail} size={30} />
              : <BiChevronUp style={{ cursor: 'pointer', marginTop: '10px' }} onClick={handleShowDetail} size={30} />}
          </div>
          {!showDetail ? ''
            : <p className={style.desc}>{!desc ? 'no description' : `${desc}`}</p>}
          <div className={style.wrapper}>
            <h1 className={style.title}>Delivery Details</h1>
            {!showShipping
              ? <BiChevronDown style={{ cursor: 'pointer', marginTop: '10px' }} onClick={handleShowShipping} size={30} />
              : <BiChevronUp style={{ cursor: 'pointer', marginTop: '10px' }} onClick={handleShowShipping} size={30} />}
          </div>
          {!showShipping ? ''
            : (
              <p className={style.desc}>
                Delivery will be made within 3 to 7 working days after the product is confirmed by the seller.
              </p>
            )}
        </div>
      </div>
    </div>
  );
}
