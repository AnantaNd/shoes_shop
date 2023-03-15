import style from './FooterBanner.module.css'
function FooterBanner (){
  return(
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>your small step,</h1>
        <h1 className={style.subtitle}>our long journey</h1>
        <p className={style.text}>we care about every step you start,<br/> and will continue to be praesent until finish line.</p>
        <div>
          {/* <button className={style.btn}>explore</button> */}
          {/* <button className={style.btn}>shop now</button> */}
        </div>
      </div>
    </div>
  )
}
export default FooterBanner