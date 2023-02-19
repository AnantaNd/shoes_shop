import Image from "next/image"
import style from './CardImg.module.css'

export default function CardImg({img}){
return (
  <div className={style.container}>
    <div className={style.containerImg}>
      <Image className={style.img} src={img} alt={'img'} width={370} height={200}/>
    </div>
    <div className={style.subImg}>
      <div className={style.containerSubImg}>
        <Image className={style.img} src={img} alt={'img'} width={180} height={100}/>
      </div>
      <div className={style.containerSubImg}>
        <Image className={style.img} src={img} alt={'img'} width={180} height={100}/>
      </div>
    </div>
  </div>
  )
}