import style from './Payment.module.css'

export default function Payment({price, discount, total}){

  return(
    <div className={style.container}>
      <h1 className={style.title}>Payment</h1>
      <p className={style.price}>Product Price: Rp. {price}</p>
      <p className={style.disc}>Discount: <span>{discount} %</span></p>
      <hr></hr>
      <h1 className={style.total}>Total: Rp. {total}</h1>
      <button className={style.btn_payment}>buy</button>
    </div>
  )
}