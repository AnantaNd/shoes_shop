import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import Layouts from '../../components/Layouts/Layouts'
import Section from '../../components/Section/Section'
import style from './Products.module.css'

export default function index() {
  const [data, setData] = useState([])
  const [isFound, setIsFound] = useState('')
  const [isSelect, setIsSelect] = useState('')

  // const onChangeSearch = (e) => {
  //   console.log(e.target.value);
  //   setIsFound(e.target.value);
  // }
  // const onSelected = (e) => {
  //   setIsSelect(e.target.value);
  //   console.log(e.target.value);
  // }

  const fetchApiAsyncAwait = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setData(data)
      console.log(data)
    } catch (err) {
      console.error('Error' + err);
    }
  };

  useEffect(() => {
    fetchApiAsyncAwait();
  }, [])

  // useEffect(() => {
  //   if (isSelect || isFound) {
  //     const filterData = data.length!=0 && data.filter((i) => (i.brand === isSelect) || i.name === isFound)
  //     // isfound in case sensitive filter
  //     setData(filterData)
  //   } else if (isSelect) {
  //     const filterData = data.length!=0 && data.filter((i) => (i.brand === isSelect))
  //     setData(filterData)
  //   } else if (isFound) {
  //     const filterData = data.length!=0 && data.filter((i) => (i.name === isFound))
  //     setData(filterData)
  //   } else {
  //     setData(data)
  //   }
  // })
  // useEffect(()=>{
  //   if(isFound){
  //     const filterData = data.filter((i)=>(i.name === isFound))
  //     setData(filterData)
  //   }else{
  //     setData(data)
  //   }
  // })


  return (
    <Layouts>
      <Section>
        <div className={style.container}>
          {/* <Search
            onChangeInput={onChangeSearch}
            value={isFound}
          />
          <Select
            onChangeSelect={onSelected}
          /> */}

          <div className={style.products}>
            {data.length != 0 && data.map((shoes, i) =>
              <Card
                img={'/sepatu.png'}
                name={shoes.name}
                price={shoes.price}
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