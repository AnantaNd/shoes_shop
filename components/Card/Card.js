// import Link from 'next/link'
import Link from 'next/link'
import { useState } from 'react'
import { StarFill } from 'react-bootstrap-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import style from './Card.module.css'


export default function Card({ img, name, price, priceAftDisc, ratting, idProduct, brand, disc, tagNew }) {

  // const {data : session} = useSession()
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
            {/* <div className={style.img} style={{backgroundImage: `url(${img})`}}></div> */}
            <LazyLoadImage src={img} className={style.img} effect='blur' alt={name}/>
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
              <h1 className={style.linkDetail}>Check Product</h1>
            </Link>
          </div>
          {/* backside */}
        </div>
      </div>
    </>
  )
}

