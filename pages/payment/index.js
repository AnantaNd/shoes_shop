/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


export default function index({product}){
  const [data, setData] = useState()

  // router
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const {shoesId} = router.query

  useEffect(()=>{
    // console.log(product)
    const result = product.filter((data)=>{
      return data.id == parseInt(shoesId)
    })
    setData(result)
    // console.log(data)
  }, [])



  return (
    <></>
  )
}
export async function getStaticProps(){
  try{
    const res = await fetch('http://localhost:3000/api/products')
    const product = await res.json()
    return {
      props:{
        product
      }
    }
  }
  catch(err){
    console.error(err)
  }
  return {
    props:{
      product
    }
  }
}