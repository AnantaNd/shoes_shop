/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layouts from "../../../components/Layouts/Layouts";
import { products } from '../../../products';
import style from './Detail.module.css';


export default function index(){
  const [data, setData] = useState([]) 
  const router = useRouter();
  const { shoesId } = router.query;
  const [count, setCount] = useState(1)

  const onIncr =()=>{
    setCount(count+1)
  }
  const onDecr =()=>{
    if(count !== 1){
      setCount(count-1)
    }
    setCount(1)
  }

  
  useEffect(() => {
    console.log(products)

    const result = products.filter((data) => {
        return data.id == parseInt(shoesId);
    });
    setData(result);
  },[shoesId]);
  
console.log(data)
  return (
    <Layouts>
      {data.map((shoes, i)=>
        <div key={i} className={style.container}>
          <div className={style.img} style={{ backgroundImage: `url(${shoes.img})`}}></div>
          <h1 className={style.title}>{shoes.name}</h1>
          <p className={style.rating}>rating : {shoes.rating}</p>
          <h1 className={style.price}>Rp. {shoes.price}</h1>
          <p className={style.desc}>{shoes.desc}</p>

          <div className={style.container_amount}>
            <h1 className={style.title_amount}>amount</h1>
            <button className={style.btn} onClick={onIncr}>+</button>
            <p className={style.count}>{count}</p>
            <button className={style.btn} onClick={onDecr}>-</button>
            <p className={style.subtotal}>subtotal</p>
            <h1 className={style.price}>Rp. {count*shoes.price}</h1>
            <button className={style.btn_cart}>Add to cart</button>
          </div>
        </div>
      )}
      
    </Layouts>
  )
}