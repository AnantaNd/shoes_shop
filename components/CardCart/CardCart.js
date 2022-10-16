import { useState } from 'react'
import { Trash } from 'react-bootstrap-icons'
import style from './CardCart.module.css'

export default function CardCart({brand, name, img, price, increment, decrement, count, reset}){

  const [checked, setChecked] = useState(false)

  const onChecked =()=>{
    setChecked(!checked);
    // console.log(!checked)
  }
    

  return(
    <div className={style.container }>
      <div>
        <input onChange={onChecked} type="checkbox"/> 
        <label className={style.brand}>{brand}</label>
        <div 
          className={style.img_cart} 
          style={{ backgroundImage: `url(${img})` }}>
        </div>
      </div>
      <div className={checked ? style.desc : style.desc_disabled}>
        <p>{name}</p>
        <h2 className={style.price}>Rp. {price}</h2>
        <div className={style.btn}>
          <button onClick={decrement} disabled={!checked} className={style.btn_decr} >-</button>
          <p className={style.count}>{count}</p>
          <button onClick={increment} disabled={!checked} className={style.btn_incr}>+</button>
          <button onClick={reset} disabled={!checked} className={style.btn_trash}>
            <Trash width="24" height="24" />
          </button>
        </div>
      </div>
    </div>
  )
}