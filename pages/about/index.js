/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CardBio from '../../components/CardBio/CardBio';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import style from './About.module.css';

export default function index(){

  const [isData, setIsData] = useState('');
  const { register, handleSubmit } = useForm();
  
  
  const onSubmit =(data)=> {
    setIsData(data)
    // console.log(isData)
  };


  return (
    <>
      <Head>
        <title>Shoes Shop | About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      
      <div className={style.container}>
        <div>
          <Hero/>
        </div>
        <Section>
          <h1 className={style.title}>Shoes Shop</h1>
          <div className={style.container_store}>
            <div className={style.content}>
              <p>Shoes Shop is a retail establishment that specializes in selling various types of footwear, such as sneakers, sandals, boots, dress shoes, and more. The shop may cater to a specific type of customer, such as men, women, children, or athletes, or it may offer a wide range of styles and sizes for all types of customers. Shoe shops may operate as a physical storefront in a shopping mall or on a high street, or as an online e-commerce store. They may carry various brands of shoes or specialize in a particular brand or style. The shop may also offer accessories such as shoe care products, socks, and insoles. Some shops may provide additional services such as shoe repairs, custom fittings, or consultations on foot health and comfort.To be successful, a shoe shop should keep up with the latest fashion trends, provide excellent customer service, and offer high-quality products at competitive prices.</p>
            </div>
            <div className={style.img}></div>
            {/* <Image className={style.img} src={'/about1.jpg'} alt='img' width={1000} height={1000}/> */}
          </div>
        </Section>
        <Section>
          <h1 className={style.title}>Our Teams</h1>
          <div className={style.container_bio}>
            <CardBio name={'ananta noviandanu'} possition={'frontend developer'} img={'/user.png'}/>
            <CardBio name={'maulana ramadhan'} possition={'frontend developer'} img={'/user.png'}/>
          </div>
        </Section>
        <Section>
          <h1 className={style.title}>Our Brands</h1>
          <div className={style.container_brand}>
            <div className={style.brands}>
              <Image src="/brand_nike.png" width="128" height="80" alt='img'/>
              <Image src="/brand_adidas.png" width="128" height="80" alt='img'/>
              <Image src="/brand_reebok.png" width="128" height="80" alt='img'/>
            </div>
          </div>
        </Section>
        <Section>
          <div className={style.container_contactus}>
            <h1 className={style.title}>Contact Us</h1>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
              <input className={style.input_email}  placeholder='email'/>
              <textarea className={style.input_comment} placeholder="Type your message" />
              <button className={style.btn_submit} type='submit'>submit</button>
            </form>
          </div>
        </Section>
      </div>
    </>
  )
}