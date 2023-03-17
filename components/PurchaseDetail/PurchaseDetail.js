import Image from 'next/image'
import React from 'react'
import style from './PurchaseDetail.module.css'

export default function PurchaseDetail({name, item, price, total, adr}) {
  return (
    <div className={style.container}>
      <h1 className={style.textCheckout}>Checkout</h1>
      <div className={style.containerHeader}>
        <div className={style.containerImg}>
          <Image src={'/sepatu.png'} width={300+'px'} height={150+'px'} alt='img' objectFit='contain'/>
        </div>
        <div className={style.wrapperContent}>
          <h1>addidas supernova</h1>
          <p>Brand: addidas</p>
        </div>
      </div>
      <div className={style.wrapper}>
        <h1 className={style.title}>Purchase Detail</h1>
        <p className={style.subtitle}>Order ID<span>13123123</span></p>
        <p className={style.subtitle}>Acount Name<span>{name}</span></p>
        <p className={style.subtitle}>Address<span>{adr}</span></p>
        <p className={style.subtitle}>Item<span>{item}</span></p>
        <p className={style.subtitle}>Price<span>Rp. {price}</span></p>
        <p className={style.subtitle}>TAX<span>Rp. 1000</span></p>
        <p className={style.subtitle}>Total<sapn>Rp. {total}</sapn></p>
      </div>
      <div className={style.wrapper}>
        <h1 className={style.title}>Payment Method</h1>
      </div>
      <div className={style.containerBtn}>
        <button className={style.btnCheckout}>Checkout</button>
        <button className={style.btnBack}>Back</button>
      </div>
    </div>
  )
}
