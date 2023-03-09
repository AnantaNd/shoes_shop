import { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import style from './CardDetail.module.css'


export default function CardDetail({title, rating, price, desc}){

  const [show, setShow] = useState(false)
  const [showDetail, setShowDetail] = useState(false)

  const handleClickShow =()=>{
    setShow(!show)
  }

  const handleClickShowDetail =()=>{
    setShowDetail(!showDetail)
  }

  const handleClick =()=>{
    console.log('click')
  }

  return (
    <>
      <div className={style.container}>
        {/* <CardImg img={image}/> */}
        <div className={style.content}>
          <h1 className={style.title}>{title}</h1>
          <h1 className={style.price}>Rp. {price}</h1>
          <p className={style.rating}>rating : {rating}</p>
          <div className={style.container_btn}>
            <button onClick={handleClick} className={style.btn_buy}>Buy</button>
            {/* <button className={style.btn_cart}>Add to Cart</button> */}
          </div>
          <div className={style.container_desc}>
            <div className={style.wrapper}>
              <h1 className={style.title}>Detail</h1>
              <BiChevronDown style={{cursor: 'pointer', marginTop: '10px'}} onClick={handleClickShowDetail} size={30}/>
            </div>
            {!showDetail? '':
              <p className={style.desc}>{desc}</p>
            }
            <div className={style.wrapper}>
              <h1 className={style.title}>Shipping </h1>
              <BiChevronDown style={{cursor: 'pointer', marginTop: '10px'}} onClick={handleClickShow} size={30}/>
            </div>
            {!show? '':
              <>
                <p className={style.desc}>
                  Delivery will be made within 5 to 6 working days after the product is confirmed by the seller.
                </p>
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}