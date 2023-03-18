import { MdClose } from 'react-icons/md'
import style from './Filter.module.css'


export default function Filter ({handleCloseFilter, handleClear, onPrice, onDiscount, onRating}){
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Filter</h1>
        <MdClose className={style.btnClose} onClick={handleCloseFilter}/>
      </div>
      <div className={style.wrapperInp}>
        <h4 className={style.subTitle}>Price</h4>
        <div onChange={onPrice}>
          <input className={style.input} type="radio"name='price'value={''}/>
          <label className={style.labelInp}>Highest</label><br/>
          <input className={style.input} type="radio" name='price' value={''}/>
          <label className={style.labelInp}>Lowest</label><br/>
        </div>
      </div>
      <div className={style.wrapperInp}>
        <h4 className={style.subTitle}>Discount</h4>
        <div onChange={onDiscount}>
          <input className={style.input} type="checkbox"name='discount'value={true} onChange={onDiscount}/>
          <label className={style.labelInp}>have a discount</label><br/>
        </div>
      </div>
      <div className={style.wrapperInp}>
        <h4 className={style.subTitle}>Rating</h4>
        <div onChange={onRating}>
          <input className={style.input} type="radio"name='rating'value={5}/>
          <label className={style.labelInp}>5</label><br/>
          <input className={style.input} type="radio"name='rating'value={4}/>
          <label className={style.labelInp}>4</label><br/>
          <input className={style.input} type="radio"name='rating'value={3}/> 
          <label className={style.labelInp}>3</label><br/>
          <input className={style.input} type="radio"name='rating'value={2}/> 
          <label className={style.labelInp}>2</label><br/>
        </div>
      </div>
      <button className={style.btnClear} onClick={handleClear}>clear filter</button>
    </div>
  )
}