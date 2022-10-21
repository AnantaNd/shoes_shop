import { useEffect, useState } from 'react';
import { Trash } from 'react-bootstrap-icons';
import style from './ModalCart.module.css';

export default function ModalCart(){

  const [isShow, setShow] = useState(false);
  const [data, setData] = useState([])

  const priceDot =(price)=>{
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

    const getItemFromLocal = () => {
        const dataLocal = localStorage.getItem('cart')
        setData(JSON.parse(dataLocal))
        console.log(dataLocal);
    }

    useEffect(() => {
        getItemFromLocal()
    }, [])


  const handleModal =()=>{
    setShow(!isShow)
    console.log('click')
  }

  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Keranjang</h1>
          {data?data.map((shoes, i)=>
            <div className={style.container_cart} key={i}>
              <div
                className={style.img_cart}
                style={{ backgroundImage: `url(${shoes.img})` }}>
              </div>
             <div className={style.properties}>
              <p className={style.product_name}>{shoes.name}</p> 
              <p className={style.product_price}>Rp. {priceDot(shoes.price)}</p> 
              <div className={style.count}>
                <button className={style.bnt_incr}>+</button>
                <p className={style.numb_count}>0</p>
                <button className={style.bnt_decr}>-</button>
                <Trash className={style.btn_del}/>
              </div>
             </div>
            </div>
          ):<h1 className={style.alert}>keranjang kosong</h1>}
          <button className={style.btn_checkout}>checkout</button>
      </div>
    </>
  )
}