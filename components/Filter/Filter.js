import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import style from './Filter.module.css';


export default function Filter ({handleCloseFilter, onBrand, onDiscount, onRating, onLastest}){

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Filter</h1>
        <MdClose className={style.btnClose} onClick={handleCloseFilter}/>
      </div>
      <div className={style.wrapperInp}>
        <h4 className={style.subTitle}>Brand</h4>
        <div onChange={onBrand}>
          <input className={style.input} type="radio"name='brand'value={'nike'}/>
          <label className={style.labelInp}>Nike</label><br/>
          <input className={style.input} type="radio" name='brand' value={'addidas'}/>
          <label className={style.labelInp}>Addidas</label><br/>
          <input className={style.input} type="radio" name='brand' value={'reebok'}/>
          <label className={style.labelInp}>Reebok</label><br/>
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
        <h4 className={style.subTitle}>Lastest</h4>
        <div onChange={onLastest}>
          <input className={style.input} type="checkbox" name='lastest' value={true} onChange={onLastest}/>
          <label className={style.labelInp}>New Collection</label><br/>
        </div>
      </div>
      <div className={style.wrapperInp}>
        <h4 className={style.subTitle}>Rating</h4>
        <div onChange={onRating}>
          <input className={style.input} type="radio"name='rating'value={5}/>
          <label className={style.labelInp}>5<span><FaStar className={style.iconStar} size={12}/></span></label><br/>
          <input className={style.input} type="radio"name='rating'value={4}/>
          <label className={style.labelInp}>4<span><FaStar className={style.iconStar} size={12}/></span></label><br/>
          <input className={style.input} type="radio"name='rating'value={3}/> 
          <label className={style.labelInp}>3<span><FaStar className={style.iconStar} size={12}/></span></label><br/>
          <input className={style.input} type="radio"name='rating'value={2}/> 
          <label className={style.labelInp}>2<span><FaStar className={style.iconStar} size={12}/></span></label><br/>
        </div>
      </div>
      {/* <button className={style.btnClear} onClick={handleClear}>clear filter</button> */}
    </div>
  )
}