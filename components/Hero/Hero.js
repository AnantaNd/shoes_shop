import style from './Hero.module.css';

function Hero(){
  return(
    <div className={style.container}>
      <div className={style.img}>
        <h1 className={style.title}>good shoes will take you<br></br>good palces</h1>
        <p className={style.desc}>choose your shoes with <span>shoes shop</span></p>
      </div>
    </div>
  )
}
export default Hero;