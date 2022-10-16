/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import Layouts from '../../components/Layouts/Layouts'
import Search from '../../components/Search/Search'
import Section from '../../components/Section/Section'
import Select from '../../components/Select/Select'
import style from './Products.module.css'

export default function index() {
  const [data, setData] = useState([])
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

  const fetchApiAsyncAwait = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setData(data)
      // console.log(data)
    } catch (err) {
      console.error('Error' + err);
    }
  };

  useEffect(() => {
    fetchApiAsyncAwait();
    console.log(data)
  }, [])

  useEffect(()=>{
    if(selected){
      const dataFilter = data.filter((i)=>(i.brand === selected))
      setData(dataFilter)
    }else{
      fetchApiAsyncAwait()
    }
  },[selected])

  useEffect(()=>{
    if(!dataFound){
      fetchApiAsyncAwait()
    }else{
      const dataFilter = data.length != null && data.filter((i) => (i.name.toLowerCase() === dataFound.toLowerCase()))
      setData(dataFilter)
      console.log(dataFilter)
    }
  },[dataFound])



  // useEffect(() => {
  //   if (selected || dataFound) {
  //     const filterData = data.length!=0 && data.filter((i) => (i.brand === selected) || i.name === isFound)
  //     // isfound in case sensitive filter
  //     setData(filterData)
  //   } else if (selected) {
  //     const filterData = data.length!=0 && data.filter((i) => (i.brand === selected))
  //     setData(filterData)
  //   } else if (dataFound) {
  //     const filterData = data.length!=0 && data.filter((i) => (i.name.toLowreCase() === isFound))
  //     setData(filterData)
  //   }
  //   fetchApiAsyncAwait()
  // }, [dataFound, selected])


  return (
    <Layouts>
      <Section>
        <div className={style.container}>
          <Search
            onChangeInput={onChangeSearch}
            value={dataFound}
          />
          <Select
            onChangeSelect={onSelected}
          />

          <div className={style.products}>
            {data.length != 0 && data.map((shoes, i) =>
              <Card key={i}
                img={'/sepatu.png'}
                name={shoes.name}
                price={shoes.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                ratting={shoes.rating}
                colorA={shoes.colorA}
                colorB={shoes.colorB}
                colorC={shoes.colorC}
              />
            )}
          </div>
        </div>
      </Section>
    </Layouts>
  )
}