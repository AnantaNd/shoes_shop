import { Heart, StarFill, Cart, LockFill } from 'react-bootstrap-icons'
import styles from './Card.module.css'
import { useRouter } from 'next/router'
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

  const handleToRemoveFromCart = (id) => {
    const dataLocal = JSON.parse(localStorage.getItem('cart'))
    const newItems = [...dataLocal].filter(cartId => id !== cartId.id)
    console.log(dataLocal);
    console.log(newItems);
    console.log(id);
  }

  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.card__image} style={{ backgroundImage: `url(${img})`, width: '100%', height: '170%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className={styles.rating}>{ratting} <StarFill /></div>
          </div>
          <div className={styles.card__details}>
            <div className={styles.name__container}>
              <h4 className={styles.title}>{name}</h4>
              {pathname.includes('favorites') || <Heart className={styles.btn_favorite} width="24" height="24" />}
            </div>
            <div className={styles.color} style={{ backgroundColor: `${colorA}` }}></div>
            <div className={styles.color} style={{ backgroundColor: `${colorB}` }}></div>
            <div className={styles.color} style={{ backgroundColor: `${colorC}` }}></div>
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
    </>
  )
}