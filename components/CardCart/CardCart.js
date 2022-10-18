import { useState } from 'react'
import { Trash } from 'react-bootstrap-icons'
import style from './CardCart.module.css'

export default function CardCart({ idProduct, brand, name, img, price }) {

  const [checked, setChecked] = useState(false)
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count++)
  }
  const decrement = () => {
    if (count !== 1) {
      setCount(count--)
    }
  }
  const reset = () => {
    setCount(1)
  }

  const handleToRemoveFromCart = (id) => {
    const dataLocal = [JSON.parse(localStorage.getItem('cart'))]
    // const newItems = [...dataLocal].filter(cartId => id !== cartId.id)
    // if (dataLocal) {
    //   localStorage.removeItem('cart')
    // }
    // localStorage.setItem('cart', newItems)
    console.log(dataLocal);
  }

  const onChecked = () => {
    setChecked(!checked);
    // console.log(!checked)
  }

  return (
    <div className={style.container}>
      <div>
        <input onChange={onChecked} type="checkbox" />
        <label className={style.brand}>{brand}</label>
        <div
          className={style.img_cart}
          style={{ backgroundImage: `url(${img})` }}>
        </div>
      </div>
      <div className={checked ? style.desc : style.desc_disabled}>
        <p>{name}</p>
        <h2 className={style.price}>Rp. {price * count}</h2>
        <div className={style.btn}>
          <button onClick={decrement} disabled={!checked} className={style.btn_decr} >-</button>
          <p className={style.count}>{count}</p>
          <button onClick={increment} disabled={!checked} className={style.btn_incr}>+</button>
          <button onClick={()=>handleToRemoveFromCart(idProduct)} disabled={!checked} className={style.btn_trash}>
            <Trash width="24" height="24" />
          </button>
        </div>
      </div>
    </div>
  )
}