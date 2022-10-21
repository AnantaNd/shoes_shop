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
          <button className={style.btn_cart}>Add to cart</button>
          
        </div>
      )}
      
    </Layouts>
  )
}