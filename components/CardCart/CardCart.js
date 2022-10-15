import { Trash } from 'react-bootstrap-icons'
import style from './CardCart.module.css'

export default function CardCart({brand, name, img, price, increment, decrement, count, reset}){
    

  return(
    <div className={style.container}>
      <div>
        <input type="checkbox"/> 
        <label className={style.brand}>{brand}</label>
        <div 
          className={style.img_cart} 
          style={{ backgroundImage: `url(${img})` }}>
        </div>
      </div>
      <div className={style.desc}>
        <p>{name}</p>
        <h2 className={style.price}>Rp. {price}</h2>
        <button onClick={decrement} className={style.btn_decr}>-</button>
        <p className={style.count}>{count}</p>
        <button onClick={increment} className={style.btn_incr}>+</button>
        <button onClick={reset} className={style.btn_trash}>
          <Trash width="24" height="24" />
        </button>
      </div>
    </div>
  )
}