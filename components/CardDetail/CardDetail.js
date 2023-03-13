import { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import Modal from '../Modal/Modal'
import style from './CardDetail.module.css'


export default function CardDetail({title, rating, price, priceAftDisc, discount, desc}){

  const [show, setShow] = useState(false)
  const [showDetail, setShowDetail] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleClickShow =()=>{
    setShow(!show)
  }

  const handleClickShowDetail =()=>{
    setShowDetail(!showDetail)
  }

  const handleClick =()=>{
    setShowModal(!showModal)
    // console.log(showModal)
  }

  return (
    <>
      <div className={style.container}>
        {/* <CardImg img={image}/> */}
        <div className={style.content}>
          <h1 className={style.title}>{title}</h1>
          {!discount? '':
            <div className={style.wrapper_discount}>
              <p className={style.price}>Rp. {price}</p>
              <div className={style.container_discount}><p className={style.discount}>{discount} % OFF</p></div>
            </div>
          }
          {!discount? 
            <h1 className={style.priceDiscount}>Rp. {price}</h1>
            :
            // error reading string data discount price 
            <h1 className={style.priceDiscount}>Rp. {priceAftDisc}</h1> 
          }
          <p className={style.rating}>rating : {rating}</p>
          <div className={style.container_btn}>
            <button onClick={handleClick} className={style.btn_buy}>Buy</button>
            {showModal && <Modal isOpen={setShowModal} name={title}/>}
          </div>
          <div className={style.container_desc}>
            <div className={style.wrapper}>
              <h1 className={style.title}>Product Description</h1>
              <BiChevronDown style={{cursor: 'pointer', marginTop: '10px'}} onClick={handleClickShowDetail} size={30}/>
            </div>
            {!showDetail? '':
              <p className={style.desc}>{!desc? 'no description': `${desc}`}</p>
            }
            <div className={style.wrapper}>
              <h1 className={style.title}>Delivery Details</h1>
              <BiChevronDown style={{cursor: 'pointer', marginTop: '10px'}} onClick={handleClickShow} size={30}/>
            </div>
            {!show? '':
              <>
                <p className={style.desc}>
                  Delivery will be made within 3 to 5 working days after the product is confirmed by the seller.
                </p>
              </>
            }
            <div className={style.wrapper}>
              <h1 className={style.title}>Product Reviews </h1>
              <BiChevronDown style={{cursor: 'pointer', marginTop: '10px'}} onClick={handleClickShow} size={30}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}