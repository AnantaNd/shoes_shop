import React from 'react'
import style from './OptPayment.module.css'

export default function OptPayment({name, code, img, handleOpt, value, tag}) {
  return (
    <div className={style.container} onChange={handleOpt}>
        <label htmlFor={tag} className={style.label}>
          <div className={style.img} style={{backgroundImage: `url(${img})`}}>
            <input className={style.inp} type={'radio'} value={value} name='opsiPaymen' id={tag}/>
          </div>
        </label>
        <div className={style.wrapper}>
          <label htmlFor={tag} className={style.label}>
            <h1 className={style.title}>{name}</h1>
            <p>{code}</p>   
          </label>
        </div>
      </div>
  )
}
