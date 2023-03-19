import React from 'react'
import style from './CardReview.module.css'

export default function CardReview({name, review}) {
  return (
    <div className={style.container}>
      <h1>{name}</h1>
      <p>{review}</p>
    </div>
  )
}
