import { GrClearOption } from 'react-icons/gr'
import { MdClose } from 'react-icons/md'
import style from './Filter.module.css'


export default function Filter ({handleCloseFilter, handleClear}){
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Filter</h1>
        <MdClose className={style.btnClose} onClick={handleCloseFilter}/>
      </div>
      <div className={style.wrapperInp}>
        <h4 className={style.subTitle}>Price</h4>
        <div>
          <input className={style.input} type="radio"name='price'value={''}/>
          <label className={style.labelInp}>Rp. 1000</label><br/>
          <input className={style.input} type="radio" name='price' value={''}/>
          <label className={style.labelInp}>Rp. 1000</label><br/>
          <input className={style.input} type="radio"name='price'value={''}/>
          <label className={style.labelInp}>Rp. 1000</label><br/>
        </div>
      </div>
      <div className={style.wrapperInp}>
        <h4 className={style.subTitle}>Discount</h4>
        <div>
          <input className={style.input} type="checkbox"name='discount'value={''}/>
          <label className={style.labelInp}>have a discount</label><br/>
        </div>
      </div>
      <div className={style.wrapperInp}>
        <h4 className={style.subTitle}>Rating</h4>
        <div>
          <input className={style.input} type="radio"name='rating'value={''}/>
          <label className={style.labelInp}>5</label><br/>
          <input className={style.input} type="radio"name='rating'value={''}/>
          <label className={style.labelInp}>4</label><br/>
          <input className={style.input} type="radio"name='rating'value={''}/> 
          <label className={style.labelInp}>3</label><br/>
          <input className={style.input} type="radio"name='rating'value={''}/> 
          <label className={style.labelInp}>2</label><br/>
        </div>
      </div>
      <button className={style.btnClear} onClick={handleClear}><GrClearOption size={15} className={style.icon}/> clear filter</button>
    </div>
  )
}