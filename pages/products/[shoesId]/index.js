/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";


export default function index(){
  const [data, setData] = useState([]) 

  const { shoesId } = useRouter().query

  
  const fetchApiId = async ()=>{
    try {
      // const { shoesId } = router.query;
      const response = await fetch(`/api/product/${shoesId}`)
      const dataFetch = await response.json()
      setData(dataFetch)
      // console.log(dataFetch)
    } catch (error) {
      console.log('Error' + error);
    }   
  }
  
  useEffect(()=>{
    fetchApiId()
  })
  
// console.log(shoesId)
  return (
    <>
    {console.log(data)}
      <h1>detail</h1>
      {data.length !== 0 &&
        <h1>{data.name}</h1>
      }
    </>
  )
}