import { useEffect, useState } from 'react';
import { Cart3, Trash } from 'react-bootstrap-icons';
import style from './ModalCart.module.css';

export default function ModalCart(){

  const [data, setData] = useState([])
  const [count, setCount] = useState(1)
  const [isShow, setShow] = useState(false)
  const handleModal =()=>{
      setShow(!isShow)
      // console.log('click')
    }


  const getItemFromLocal = () => {
    const dataLocal = localStorage.getItem('cart')
    setData(JSON.parse(dataLocal))
    // console.log(dataLocal);
  }

    useEffect(() => {
        getItemFromLocal()
    }, [isShow])

  const priceDot =(price)=>{
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  // const onChecked = () => {
  //   setIsChecked(!isChecked)
  // }

  const increment = () => {
    setCount(count+1)
    
  }
  const decrement = () => {
    if (count !== 1) {
      setCount(count-1)
    }
  }

    const handleToRemoveFromCart = (id) => {
      const dataLocal = JSON.parse(localStorage.getItem('cart'))
      const newItems = [...dataLocal].filter(cartId => id !== cartId.id)
      if(dataLocal){
        localStorage.removeItem('cart')
      }
      localStorage.setItem('cart', JSON.stringify(newItems))
      location.reload()
    }

  return (
    <>
      <div onClick={handleModal}>
        {/* <p className={data.length? `${style.length_cart}` :`${style.length_cart_none}`}>{data.length}</p> */}
        <Cart3 className={style.navbar__action} width="24" height="24" />
      </div>

      <div className={isShow? `${style.container}`: `${style.container_none}`}>
        <h1 className={style.title}>Keranjang</h1>
        {/* <p className={style.len_product}>jumlah produk : {data.length}</p> */}
          { 
            data?.map((shoes, i)=>
            <div className={style.container_cart} key={i}>
              <div
                className={style.img_cart}
                style={{ backgroundImage: `url(${shoes.img})` }}>
              </div>
             <div className={style.properties}>
              <p className={style.product_name}>{shoes.name}</p> 
              <p className={style.product_price}>Rp. {priceDot(shoes.price)}</p> 
              <div className={style.count}>
                {/* <button onClick={increment} className={style.btn_incr}>+</button>
                <p className={style.numb_count}>{count}</p>
                <button onClick={decrement} className={style.btn_decr} >-</button> */}
                <button onClick={()=>handleToRemoveFromCart(shoes.id)} className={style.btn_del}>
                  <Trash width="24" height="24" />
                </button>
              </div>
             </div>
            </div>
          )}
          <button className={style.btn_checkout}>checkout</button>
      </div>
    </>
  )
}