import style from './CardDetail.module.css'
export default function CardDetail({title, rating, price, desc, image}){
  return (
    <>
      <div className={style.container}>
        {/* <CardImg img={image}/> */}
        <div className={style.content}>
          <h1 className={style.title}>{title}</h1>
          <h1 className={style.price}>Rp. {price}</h1>
          <p className={style.rating}>rating : {rating}</p>
          <p className={style.desc}>{desc}</p>
        </div>
      </div>
    </>
  )
}