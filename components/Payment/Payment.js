import style from './Payment.module.css'

export default function Payment({price}){

  return(
    <div className={style.container}>
      <h1 className={style.title}>Payment</h1>
      <p className={style.price}>Harga Barang: Rp. {price}</p>
      <p className={style.disc}>Diskon: </p>
      <hr></hr>
      <h1 className={style.title}>Total Pembayaran: Rp. {price}</h1>
      <button className={style.btn_payment}>bayar</button>
    </div>
  )
}