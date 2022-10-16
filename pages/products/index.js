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

  useEffect(() => {
    if (selected || dataFound) {
      const dataFilter = data
                          .filter(({ name }) => dataFound ? (name.toLowerCase().includes(dataFound.toLocaleLowerCase())) : true)
                          .filter(({ brand }) => selected ? (brand === selected) : true)
      setData(dataFilter)
      return
    }
    fetchApiAsyncAwait()
  }, [selected, dataFound])

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