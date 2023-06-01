/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CardDetail from '../../../components/CardDetail/CardDetail';
import CardImg from '../../../components/CardImg/CardImg';
import Section from '../../../components/Section/Section';
import style from './Detail.module.css';

export default function Detail({ product }) {
  const [data, setData] = useState(product);
  const [size, setSize] = useState();
  const [addr, setAddr] = useState();
  const router = useRouter();

  const generateId = (length) => {
    let result = '';
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charLength = char.length;
    for (let i = 0; i < length; i++) {
      result += char.charAt(Math.floor(Math.random() * charLength));
    }
    return `SSHP${result}`;
  };

  const onSubmit = (e) => {
    const userOrder = {
      orderId: generateId(8),
      address: addr,
      size,
    };
    e.preventDefault();
    router.push({
      pathname: `/checkout/${product.id}`,
      query: {
        orderId: userOrder.orderId,
        address: userOrder.address,
        size: userOrder.size,
      },
    });
  };

  const dotPrice = (numb) => numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const priceDisc = (numb, disc) => {
    const temp = numb / disc;
    return parseInt(numb - temp);
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const handleAddr = (e) => {
    setAddr(e.target.value);
  };

  return (
    <>
      <Head>
        <title>
          Shoes Store | Detail Shoes
          {product.id}
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Section>
        <div className={style.container}>
          <div className={style.content}>
            <CardImg img={data.img} />
            <CardDetail
              idProduct={data.id}
              image={data.img}
              title={data.name}
              price={dotPrice(data.price)}
              priceAftDisc={dotPrice(priceDisc(data.price, data.discount))}
              rating={data.rating}
              desc={data.desc}
              discount={data.discount}
              sizeData={data.size}
              onSize={handleSize}
              btnDisable={!(size && addr)}
              helper={size}
              onInputAddr={handleAddr}
              helperAddr={addr}
              onBtnAction={onSubmit}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
export async function    getServerSidePropsProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
}
