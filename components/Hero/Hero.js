import style from './Hero.module.css';

function Hero(){
  return(
    <div className={style.container}>
      <div className={style.img}>
        <h1 className={style.title}>about</h1>
        <p className={style.desc}>Lorem Ipsum is simply dummy text of the printing. <br/>Lorem Ipsum is simply dummy text of the printing.</p>
      </div>
    </div>
  )
}
export default Hero;