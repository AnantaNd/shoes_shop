/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import Layouts from '../../components/Layouts/Layouts'
import Search from '../../components/Search/Search'
import Section from '../../components/Section/Section'
import Select from '../../components/Select/Select'
import style from './Products.module.css'

export default function index({product}) {
  const [data, setData] = useState(product)
  const [dataFound, setDataFound] = useState('')
  const [selected, setSelected] = useState('')

  const onChangeSearch = (e) => {
    // console.log(e.target.value);
    setDataFound(e.target.value);
  }
  const onSelected = (e) => {
    setSelected(e.target.value);
    console.log(e.target.value);
  }

  useEffect(()=>{
   if(dataFound){
    const search = dataFound.toLowerCase()
    const temp = data.filter((data)=>data.name.toLowerCase().includes(search))
    setData(temp)
   }else{
    setData(product)
   }
  })

  // useEffect(() => {
  //   if ((selected !== '') && (dataFound !== '')) {
  //     const dataFilter = data
  //       .filter(({ name }) => dataFound ? (name.toLowerCase().includes(dataFound.toLowerCase())) : true)
  //       .filter(({ brand }) => selected ? (brand === selected) : true)
  //     setData(dataFilter)
  //     return
  //   } else if ((selected === '') && (dataFound !== '')) {
  //     const dataFilter = data
  //       .filter(({ name }) => dataFound ? (name.toLowerCase().includes(dataFound.toLowerCase())) : true)
  //     setData(dataFilter)
  //     return
  //   } else if ((selected !== '') && (dataFound === '')) {
  //     const dataFilter = data
  //       .filter(({ brand }) => selected ? (brand === selected) : true)
  //     setData(dataFilter)
  //   }else{
  //     fetchApiAsyncAwait();
  //   }
  // }, [selected, dataFound])

  return (
    <Layouts>
      <div className={style.container}>
        <Section>
          <div className={style.filter}>
            <Search
              onChangeInput={onChangeSearch}
              value={dataFound}
              />
            <Select
              onChangeSelect={onSelected}
              value={selected}
              />
            {/* <BtnFilter/> */}
          </div>
          <p className={style.length_products}>{data.length} products</p>
        </Section>
        <Section>
            <div className={style.products}>
              {data.length != 0 && data.map((shoes, i) =>
                // <Link href={`products/${shoes.id}`} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card key={i}
                    idProduct={shoes.id}
                    img={shoes.img}
                    disc={shoes.discount}
                    name={shoes.name}
                    // price={shoes.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    price={shoes.price}
                    ratting={shoes.rating}
                    brand={shoes.brand}
                    colorA={shoes.colorA}
                    colorB={shoes.colorB}
                    colorC={shoes.colorC}
                  />
                // </Link>
              )}
            </div>
        </Section>
        </div>
    </Layouts>
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
