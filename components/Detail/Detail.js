import style from './Detail.module.css'

export default function Detail(name, rating, price, desc){

  return (
    <div className={style.container}>
      <h1 className={style.title}>{name}</h1>
      <p className={style.rating}>{rating}</p>
      <h1 className={style.price}>{price}</h1>
      <p className={style.desc}>{desc}</p>
    </div>
  )


}