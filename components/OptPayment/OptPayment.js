import React from 'react'
import style from './OptPayment.module.css'

export default function OptPayment({name, code, img, handleOpt, value}) {
  return (
    <div className={style.container} onChange={handleOpt}>
      <div className={style.img} style={{backgroundImage: `url(${img})`}}>
        <input className={style.inp} type={'radio'} value={value} name='opsiPayment'/>
      </div>
      <div className={style.wrapper}>
        <h1 className={style.title}>{name}</h1>
        <p>{code}</p>
      </div>
    </div>
  )
}
