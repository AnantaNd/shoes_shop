/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { userService } from 'services';
import ContainerProduct from '../components/ContainerProduct/ContainerProduct';
import FooterBanner from '../components/FooterBanner/FooterBanner';
import Section from '../components/Section/Section';
import style from '../styles/Home.module.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home({ product }) {
  const [flashSale, setFlashSale] = useState();
  const [newCollection, setNewCollection] = useState();

  useEffect(() => {
    const discountFilter = product.filter((product) => product.discount >= 0);
    setFlashSale(discountFilter);
    const collectFilter = product.filter((product) => product.tag === 'new');
    setNewCollection(collectFilter);
  }, []);

  return (
    <>
      <Head>
        <title>Shoes Shop | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className={style.container}>
        <Section>
          <div className={style.hero}>
            <div className={style.hero__container}>
              <h1 className={style.hero__headline}>
                Hello
                <span className={style.highlight}>
                  {' '}
                  {userService ? userService.userValue.firstName : 'World'}
                </span>
                ,
                <br />
                Lets Make Your Day
                <span className={style.highlight}> Excited</span>
              </h1>
              <p className={style.hero__headlinesupport}>
                The series of shoe collections for men, women, teenagers and children, complete! If you are looking for the latest sports shoes, comfortable shoes for daily activities, even stylish shoes.
                {' '}
                <span className={style.highlight}>We have all collection for you. </span>
                Always put forward innovation, for example the newest materials, or the latest technology.
              </p>
              <Link href="/products"><button className={style.cta}> Get Started</button></Link>
            </div>
            <div className={style.banner}>
              <Image src="/hero_banner.png" width="650px" height="450px" objectFit="contain" style={{ marginLeft: `${8}px` }} alt="img" />
            </div>
          </div>
          <Section>
            <div className={style.section__container}>
              <h1 className={style.section__title}>BRANDS</h1>
              <div className={style.brands}>
                <Image src="/brand_nike.png" width="128" height="80" alt="img" />
                <Image src="/brand_adidas.png" width="128" height="80" alt="img" />
                <Image src="/brand_reebok.png" width="128" height="80" alt="img" />
              </div>
            </div>
          </Section>
        </Section>
        <Section>
          <ContainerProduct dataCard={newCollection} title="New Collections" label="New" subLabel="Collections" img="/collection.jpg" />
        </Section>
        <Section>
          <ContainerProduct dataCard={flashSale} title="Flash Sale" label="Flash Sale" img="/background.jpg" />
        </Section>
        <div className={style.containerFooter}>
          <FooterBanner />
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  try {
    const res = await fetch('https://shoes-shop-green.vercel.app/api/product');
    const product = await res.json();
    return {
      props: {
        product,
      },
    };
  } catch (err) {
    console.error(err);
  }
  return {
    props: {
      product,
    },
  };
}
