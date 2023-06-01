import { ModalPayment } from 'components/ModalPayment/ModalPayment'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { userService } from 'services'
import Section from '../../../components/Section/Section'
import style from './Checkout.module.css'


export default function index({product}) {
  // console.log(product)
  const [data, setData] = useState(product)
  const router = useRouter()
  const [local, setLocal] = useState()
  const [va, setVa] = useState()


  // handle history set local storage
  const onSubmitPayment =()=>{
    let temp = {
      email: userService?.userValue.email,
      name: userService?.userValue.firstName,
      size: router.query.size,
      idOrder: router.query.orderId,
      item: data.name,
      price: totalBenefit(data,local),
      status:'process'
    }
    const dataLocal = localStorage.getItem('history')
    const dataHistory = dataLocal? [...JSON.parse(dataLocal), temp] : [temp]
    if(dataLocal){
      localStorage.removeItem('history')
    }
    localStorage.setItem('history', JSON.stringify(dataHistory))
    // console.log(dataHistory)
    router.push('/history')

  }

  // get local storage
  const getItemLocal =()=>{
    const item = localStorage.getItem('history')
    const parseItem = JSON.parse(item)
    const x = parseItem?.filter((data)=> data.name == userService?.userValue.firstName)
    setLocal(x)
  }
  
  const memberShipType =(data)=>{
    if(data?.length >= 3 && data?.length <= 4){
      return 'Silver'
    }else if(data?.length >= 5 && data?.length <= 8){
      return 'Gold'
    }else if(data?.length >= 8){
      return 'Platinum'
    }
    // return 'not member'
  }
  
  const memberBenefit =(local)=>{
    if(memberShipType(local)=='Silver'){
      return(3)
    }else if(memberShipType(local)=='Gold'){
      return(5)
    }else if(memberShipType(local)=='Platinum'){
      return(8)
    }
  }

  const totalBenefit =(data, local)=>{
    let totalDisc = 0
    if(!memberBenefit(local)){
      let temp = 0
      if(data.discount){
        temp = (data.price*data.discount)/100
        return data.price-temp
      }else{
        return data.price
      }
    }else{   
      if(data.discount){
        totalDisc = (memberBenefit(local)+data.discount)
        let countPrice = (data.price*totalDisc)/100
        return(data.price - countPrice)
      }else{
        totalDisc = (memberBenefit(local))
        let countPrice = (data.price*totalDisc)/100
        return data.price - countPrice
      }
    }
  }
  
  
  const dotPrice =(numb)=>{
    return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  // generate random va
  const generateVA =()=>{
    let result = ''
    const char = '0123456789'
    const charLength = char.length
    for (let i = 0; i <= 12; i++) {
      result += char.charAt(Math.floor(Math.random()*charLength))
    }
    return result

  }

  useEffect(()=>{
    getItemLocal()
    setVa(generateVA)
  },[])
  console.log(data.discount)

  
  return (
    <div>
      <Head>
        <title>Shoes Shop | Checkout</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <>
        <Section>
          <div className={style.container}>
            <h1 className={style.textCheckout}>Checkout</h1>
            <div className={style.containerHeader}>
              <div className={style.containerImg}>
                <Image src={data.img} width={300+'px'} height={150+'px'} alt={data.name} objectFit='contain'/>
              </div>
              <div className={style.wrapperContent}>
                <h1 className={style.titleItem}>{data.name}</h1>
                <p className={style.subTitleItem}>Brand: {data.brand}</p>
                <p className={style.subTitleItem}>Rp. {data.price}</p>
                {!data.discount? '':<div className={style.tagDisc}>{data.discount}%</div>}
              </div>
            </div>
            <div className={style.wrapper}>
                <h1 className={style.title}>Purchase Detail</h1>
                <p className={style.subtitle}>Order ID<span>{router.query.orderId}</span></p>
                <p className={style.subtitle}>Item<span>{data.name}</span></p>
                <p className={style.subtitle}>Size<span>{router.query.size}</span></p>
                <p className={style.subtitle}>Acount Name<span>{userService.userValue.firstName}</span></p>
                <p className={style.subtitle}>Address<span>{router.query.address}</span></p>
                <p className={style.total}>Discount Member<span>+ {memberBenefit(local)}%</span></p>
                <p className={style.subtitle}>Price<span>Rp. {data.price}</span></p>
                <p className={style.total}>Total<span>Rp. {dotPrice(totalBenefit(data,local))}</span></p>
            </div>
            <div className={style.containerBtn}>
              <ModalPayment
                accountName={userService?.userValue.firstName}
                itemName={data.name}
                price={dotPrice(totalBenefit(data,local))}
                orderId={router.query.orderId}
                va={va}
                onSubmit={onSubmitPayment}
                // handleCopy={handleCopyClick}
              />
              <Link href={`/products/${data.id}`}> 
                <button className={style.btnBack}>Back</button>
              </Link>
            </div>
          </div>
        </Section>
      </>
    </div>
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