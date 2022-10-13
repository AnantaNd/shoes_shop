import { Heart } from 'react-bootstrap-icons'
import styles from './Card.module.css'
import { StarFill } from 'react-bootstrap-icons'

export default function Card({ img, name, price, ratting, color }) {

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
            <div className={styles.color}></div>  
            <div className={styles.color}></div>
            <div className={styles.color}></div>
            <p className={styles.price}>Rp. {price}</p>
          </div>
        </div>
        <button className={styles.btn_buy}>buy</button>
      </div>
    </>
  )
}