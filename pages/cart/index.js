import { useState } from "react";
import CardCart from "../../components/CardCart/CardCart";
import Layouts from "../../components/Layouts/Layouts";
import Payment from "../../components/payment/payment";
import style from "./Cart.module.css";
export default function index(){

  const [count, setCount] = useState(0)

  const increment =()=>{
    setCount(count++)
  }
  const decrement =()=>{
    if(count !== 0){
      setCount(count--)
    }else{
      setCount(0)
    }
  }
  const reset =()=>{
    setCount(0)
  }


  return(
    <Layouts>
      <div className={style.container}>
        <div className={style.grid_item}>
          <h1 className={style.title}>cart</h1>
          <CardCart
            brand={'nike'}
            name={'AJ retro 12'}
            img={'/sepatu.png'}
            price={10000*count}
            count={count}
            increment={increment}
            decrement={decrement}
            reset={reset}
          />
          
        </div>
        <div className={style.grid_item}>
          <Payment
            price={10000*count}
          />
        </div>
      </div>
    </Layouts>
  )
}