// import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { StarFill } from 'react-bootstrap-icons'
import { BsThreeDotsVertical } from 'react-icons/bs'
import style from './Card.module.css'

export default function Card({ img, name, price, priceAftDisc, ratting, idProduct, brand, disc, tagNew }) {

  const {data : session} = useSession()

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
    <div className={style.container}>
      <div className={style.tag}>
        {tagNew? <div className={style.tagNew}>{tagNew}</div>: <br />}
        {disc? 
          <p className={style.tagDisc}>{disc} %</p>:
          <br></br>
        }
      </div>
      <div className={style.img} style={{backgroundImage: `url(${img})`}}></div>
      {/* <Image src={img} width={200 + 'px'} height={100 + 'px'} alt={'img'} objectFit={'cover'}/> */}
      <h1 data-testid='title' className={style.title}>{name}<span><Link href={`products/${idProduct}`}><BsThreeDotsVertical className={style.btn_detail} /></Link></span></h1>
      <p className={style.brand}>{brand}</p>
      <p data-testid='rating'>{ratting} <StarFill className={style.iconRating} size={13+'px'}/></p>
      {!disc? 
        <h2 className={style.price}>Rp. {price}</h2>
        :
        <h2 className={style.disc}>Rp. {priceAftDisc}</h2>
      }
      <div className={style.container_btn}>
        <Link href={`/checkout/${idProduct}`}>
          {session?
            <button className={style.btn_buy}>BUY</button>:
            <button disabled className={style.btn_buyDisable}>BUY</button>
          }
        </Link>
      </div>
      {/* {showModal && <Modal isOpen={setShowModal} name={name}/>} */}
    </div>
  )
}