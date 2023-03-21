import Image from 'next/image'
import React, { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import style from './PurchaseDetail.module.css'


export default function PurchaseDetail({orderId, name, item, price, total, adr, brand, tax, img}) {

  const [showPurcase, setShowPurcase] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  // const [showReview, setShowReview] = useState(false)

  const handleShowPurcase =()=>{
    setShowPurcase(!showPurcase)
    setShowPayment(false)
  }

  const handleShowPayment =()=>{
    setShowPayment(!showPayment)
    setShowPurcase(false)
  }

  return (

    
    <div className={style.container}>
      <h1 className={style.textCheckout}>Checkout</h1>
      <div className={style.containerHeader}>
        <div className={style.containerImg}>
          <Image src={img} width={300+'px'} height={150+'px'} alt='img' objectFit='contain'/>
        </div>
        <div className={style.wrapperContent}>
          <h1>{item}</h1>
          <p>Brand: {brand}</p>
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.wrapperBtnExpand}>
          <h1 className={style.title}>Purchase Detail</h1>
          {!showPayment? 
             <BiChevronDown style={{cursor: 'pointer', marginTop: '10px'}} onClick={handleShowPayment} size={30}/>
            :
             <BiChevronUp style={{cursor: 'pointer', marginTop: '10px'}} onClick={handleShowPayment} size={30}/>
          }
        </div>
        {!showPayment ?
          '':
          <>
            <p className={style.subtitle}>Order ID<span>{orderId}</span></p>
            <p className={style.subtitle}>Item<span>{item}</span></p>
            <p className={style.subtitle}>Acount Name<span>{name}</span></p>
            <p className={style.subtitle}>Address<span>{adr}</span></p>
            <p className={style.subtitle}>Price<span>Rp. {price}</span></p>
            <p className={style.subtitle}>TAX<span>Rp. {tax}</span></p>
            <p className={style.subtitle}>Total<sapn>Rp. {total}</sapn></p>
          </>
        }
      </div>
      <div className={style.wrapper}>
        <h1 className={style.title}>Payment Method</h1>
      </div>
      <div className={style.containerBtn}>
        <button className={style.btnCheckout}>Checkout</button>
        {/* <Link href={`/products/`}> must be route to product with id */}
        <button className={style.btnBack}>Back</button>
        {/* </Link> */}
      </div>
    </div>
  )
}
