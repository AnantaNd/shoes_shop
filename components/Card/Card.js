// import Link from 'next/link'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Cart3, StarFill } from 'react-bootstrap-icons'
import { BsThreeDotsVertical } from 'react-icons/bs'
import style from './Card.module.css'

export default function Card({ img, name, price, priceAftDisc, ratting, idProduct, brand, disc }) {

  const [showModal, setShowModal] = useState(false)
  // const { pathname } = useRouter()

 

  const handleToCart = async (id) => {
    const dataFetch = []
    const dataLocal = localStorage.getItem('cart')
    try {
      const response = await fetch(`/api/product/${id}`)
      dataFetch = await response.json()
    } catch (error) {
      console.log('Error' + error);
    }
    const data = dataLocal ? [...JSON.parse(dataLocal), ...dataFetch] : [...dataFetch]
    if (dataLocal) {
      localStorage.removeItem('cart')
    }
    localStorage.setItem('cart', JSON.stringify(data))
    console.log(data);
    console.log(id);
  }

  const handleClick =()=>{
    setShowModal(!showModal)
    // console.log(showModal)
  }

  return (
    <div className={style.container}>
      <div className={style.tag}>
        <p>{ratting} <StarFill className={style.iconRating} size={13+'px'}/></p>
        {disc? 
          <p className={style.tagDisc}>{disc} %</p>:
          <br></br>
        }
      </div>
      <Image src={img} width={200 + 'px'} height={100 + 'px'} alt={'img'} objectFit={'cover'}/>
      <h1 className={style.title}>{name}<span><Link href={`products/${idProduct}`}><BsThreeDotsVertical className={style.btn_detail} /></Link></span></h1>
      <p className={style.brand}>{brand}</p>
      {!disc? 
        <h2 className={style.price}>Rp. {price}</h2>
        :
        <h2 className={style.disc}>Rp. {priceAftDisc}</h2>
      }
      <div className={style.container_btn}>
        <button onClick={() => handleToCart(idProduct)} className={style.btn_cart}><Cart3 size={18}/></button>
        <button className={style.btn_buy}>BUY</button>
      </div>
      {/* {showModal && <Modal isOpen={setShowModal} name={name}/>} */}
    </div>
  )
}
// total={(data.price-(data.price/data.discount))