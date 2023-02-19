/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { products } from '../../../products';
import { useState } from "react";
import CardDetail from "../../../components/CardDetail/CardDetail";
import CardImg from "../../../components/CardImg/CardImg";
import Layouts from "../../../components/Layouts/Layouts";
import Section from '../../../components/Section/Section';
import style from './Detail.module.css';


export default function index({product}){
  const [data, setData] = useState(product) 
  console.log(data)
  // const router = useRouter();
  // const { shoesId } = router.query;
  
  // useEffect(() => {
  //   console.log(products)

  //   const result = products.filter((data) => {
  //       return data.id == parseInt(shoesId);
  //   });
  //   setData(result);
  // },[shoesId]);
  
  return (
    <Layouts>
      <Section>
        <div className={style.container}>
          {data?.map((data, i)=>(
            <>
              <div key={i} className={style.content}>
                <div>
                  <CardImg img={data.img}/>
                </div>
                {/* <Payment price={data.price} discount={data.discount} total={(data.price-(data.price/data.discount))}/> */}
                <div>
                  <CardDetail image={data.img} title={data.name} price={data.price} rating={data.rating} desc={data.desc}/>
                </div>
              </div>
            </>
          ))}
        </div>
      </Section>
      
    </Layouts>
  )
}
export async function getServerSideProps({params}){
  const res = await fetch('http://localhost:3000/api/product/'+params.id)
  const product = await res.json()
  return {
    props:{
      product
    }
  }
}