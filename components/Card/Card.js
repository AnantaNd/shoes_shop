import { Heart, StarFill, Cart } from 'react-bootstrap-icons'
import styles from './Card.module.css'

export default function Card({ img, name, price, ratting, colorA, colorB, colorC }) {

  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.card__image} style={{ backgroundImage: `url(${img})`, width: '100%', height: '170%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className={styles.rating}>{ratting} <StarFill/></div>
          </div>
          <div className={styles.card__details}>
            <div className={styles.name__container}>
              <h4 className={styles.title}>{name}</h4>
              <Heart className={styles.btn_favorite} width="24" height="24" />
            </div>
            <div className={styles.color} style={{backgroundColor: `${colorA}`}}></div>  
            <div className={styles.color} style={{backgroundColor: `${colorB}`}}></div>  
            <div className={styles.color} style={{backgroundColor: `${colorC}`}}></div>  
            <p className={styles.price}>Rp. {price}</p>
          </div>
        </div>
        <div>
        <button className={styles.btn_cart}>ADD TO CART</button>
        <button className={styles.btn_buy}>BUY</button>
        </div>
      </div>
    </>
  )
}