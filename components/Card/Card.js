// import Link from 'next/link'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { StarFill, ThreeDotsVertical } from 'react-bootstrap-icons'
import styles from './Card.module.css'
export default function Card({ img, name, price, ratting, colorA, colorB, colorC, idProduct }) {
  const { pathname } = useRouter()

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

  return (
   
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.card_img} style={{ backgroundImage: `url(${img})` }}>
          </div>
          <div className={styles.card__details}>
            <div className={styles.name__container}>
              <h4 className={styles.title}>{name}</h4>
              {/* {pathname.includes('favorites') || <Link href={`/products/${idProduct}`}><ThreeDotsVertical className={styles.btn_favorite} width="20" height="20" /></Link>} */}
              <Link href={`products/${idProduct}`}>
                <ThreeDotsVertical className={styles.btn_favorite} width="20" height="20" />
              </Link>
            </div>
            <div className={styles.color} style={{ backgroundColor: `${colorA}` }}></div>
            <div className={styles.color} style={{ backgroundColor: `${colorB}` }}></div>
            <div className={styles.color} style={{ backgroundColor: `${colorC}` }}></div>
            <div className={styles.rating}>{ratting} <StarFill /></div>
            <p className={styles.price}>Rp. {price}</p>
          </div>
        </div>
        <div>
          {pathname.includes('favorites')
            ? <button onClick={() => handleToRemoveFromCart(idProduct)} className={styles.btn_cart}>REMOVE FROM FAVORITE</button>
            : <button onClick={() => handleToCart(idProduct)} className={styles.btn_cart}>ADD TO CART</button>}
          <button className={styles.btn_buy}>BUY</button>
        </div>
      </div>
  )
}