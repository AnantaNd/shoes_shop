import Image from "next/image";
import style from './CardBio.module.css';


export default function BioCard({name, possition, repo, img}){
  return (
    <div className={style.container}>
      <Image className={style.profile} src={img} width='120px' height='120px' alt="img" objectFit="contain"/>
      <h1 className={style.name}>{name}</h1>
      <p className={style.possition}>{possition}</p>
      {/* <p className={style.project}>Github</p> */}
    </div>
  )
}