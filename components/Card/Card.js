import { Heart } from 'react-bootstrap-icons'
import styles from './Card.module.css'

export default function Card({img, name, price, ratting, color}){

  return(
    <>
      <div className={styles.card}>
        {/* <Image src={img} alt={name} height={400} width={400}/> */}
        <Heart className={styles.btn_favorite} width="24" height="24"/>
        <img className={styles.img_card} src={img} alt={name}/>
        <p className={styles.title}>{name}</p>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
        <h1 className={styles.price}>Rp. {price}</h1>
        <p className={styles.rating}>ratting: {ratting}</p>
        <button className={styles.btn_buy}>buy</button>


      </div>
    </>
  )
}