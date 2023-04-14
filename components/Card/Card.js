// import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { StarFill } from 'react-bootstrap-icons'
import { BsThreeDotsVertical } from 'react-icons/bs'
import style from './Card.module.css'
import { useState } from 'react'

export default function Card({ img, name, price, priceAftDisc, ratting, idProduct, brand, disc, tagNew, dataSize }) {

  const {data : session} = useSession()
  const [isShown, setIsShown] = useState(false)

  // const [showModal, setShowModal] = useState(false)
  // const { pathname } = useRouter()

 
  // const handleToCart = async (id) => {
  //   const dataFetch = []
  //   const dataLocal = localStorage.getItem('cart')
  //   try {
  //     const response = await fetch(`/api/product/${id}`)
  //     dataFetch = await response.json()
  //   } catch (error) {
  //     console.log('Error' + error);
  //   }
  //   const data = dataLocal ? [...JSON.parse(dataLocal), ...dataFetch] : [...dataFetch]
  //   if (dataLocal) {
  //     localStorage.removeItem('cart')
  //   }
  //   localStorage.setItem('cart', JSON.stringify(data))
  //   console.log(data);
  //   console.log(id);
  // }


  return (
    <>
      <div className={style.myCard}>
        <div className={style.innerCard}>
          {/* frontside */}
          <div className={style.frontSide}>
            <div className={style.tag}>
              {tagNew? <div className={style.tagNew}>{tagNew}</div>: <br />}
              {disc? 
                <p className={style.tagDisc}>{disc} %</p>:
                <br></br>
              }
            </div>
            <div className={style.img} style={{backgroundImage: `url(${img})`}}></div>
            <h1 data-testid='title' className={style.title}>{name}</h1>
            <p className={style.brand}>{brand}</p>
            <p data-testid='rating'>{ratting} <StarFill className={style.iconRating} size={13+'px'}/></p>
            {!disc? 
              <h2 className={style.price}>Rp. {price}</h2>
              :
              <h2 className={style.disc}>Rp. {priceAftDisc}</h2>
            }
          </div>
          {/* frontside */}
          {/* backside */}
          <div className={style.backSide}>
            <Link href={`/products/${idProduct}`}>
              <h1 className={style.linkDetail}>Detail</h1>
            </Link>
          </div>
          {/* backside */}
        </div>
      </div>
    </>
  )
}

