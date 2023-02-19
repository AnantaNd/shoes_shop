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
          <div className={style.container_btn}>
            <button className={style.btn_buy}>Buy</button>
            <button className={style.btn_cart}>Add to Cart</button>
          </div>
          <hr></hr>
          <p className={style.desc}>{desc}</p>
          <hr></hr>
          <h1 className={style.title}>Shipping</h1>
          <p className={style.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
      </div>
    </>
  )
}