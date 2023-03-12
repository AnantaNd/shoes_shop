/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import FooterBanner from '../components/FooterBanner/FooterBanner'
import Layouts from '../components/Layouts/Layouts'
import Section from '../components/Section/Section'
import style from '../styles/Home.module.css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import ContainerProduct from '../components/ContainerProduct/ContainerProduct'

export default function Home({product}) {
  const [data, setData] = useState()


  useEffect(()=>{
    const temp = product.filter((product)=> product.discount >= 0)
    setData(temp)
  },[])

  return (
    <div className={style.container}>
      <Head>
        <title>Shoes Shop | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Layouts>
        
        <Section>
          <div className={style.hero}>
            <div className={style.hero__container}>
              <h1 className={style.hero__headline}>Lets Make <br /> Your Day <span className={style.highlight}>Excited</span></h1>
              <p className={style.hero__headlinesupport}>
              The series of shoe collections for men, women, teenagers and children, complete! If you are looking for the latest sports shoes, comfortable shoes for daily activities, even stylish shoes. <span className={style.highlight}>We have all collection for you. </span>Always put forward innovation, for example the newest materials, or the latest technology.

              </p>
              <Link href="/products"><button className={style.cta}> Get Started</button></Link>
            </div>
            <div className={style.banner}>
              <Image src="/hero_banner.png" width="500" height="470" style={{ marginLeft: 8 + "px" }} alt='img'/>
            </div>

          </div>
        </Section>
        <Section>
          <div className={style.section__container}>
            <h1 className={style.section__title}>BRANDS</h1>
            <div className={style.brands}>
              <Image src="/brand_nike.png" width="128" height="80" alt='img'/>
              <Image src="/brand_adidas.png" width="128" height="80" alt='img'/>
              <Image src="/brand_reebok.png" width="128" height="80" alt='img'/>
            </div>
          </div>
        </Section>
        {/* flashSale */}
        <Section>
          <ContainerProduct dataCard={data} title={'Flash Sale'} label={'Flash Sale'} img={'/background.jpg'}/>
        </Section>
        
        <Section>
          <ContainerProduct dataCard={product} title={'Product'} label={"Our"} subLabel={'Collection'} img={'/collection.jpg'}/>
        </Section>
        <div>
          <FooterBanner />
        </div>
      </Layouts>
    </div>
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
