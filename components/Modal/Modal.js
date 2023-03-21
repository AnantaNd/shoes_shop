
import Link from 'next/link'
import style from './Modal.module.css'

const Modal =({name, isOpen, idProduct})=>{


  return (
    <div className={style.centered}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <h5 className={style.dialog}>Confirm Payment</h5>
        </div>
        <button className={style.closeBtn} onClick={()=>isOpen(false)}>
          x
        </button>
        <div className={style.modalContent}>
          Are you sure you want to buy <span>{name}</span>?
        </div>
        <div className={style.modalActions}>
          <div className={style.actionsContainer}>
          <Link href={`/checkout/${idProduct}`}><button className={style.buyBtn}>confirm</button></Link>
            <button className={style.cancelBtn} onClick={()=>isOpen(false)}>cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal