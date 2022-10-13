import { useEffect, useState } from 'react'
import Card from '../components/Card/Card'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Search/Search'
import Select from '../components/Select/Select'
import data from '../data.json'
import styles from '../styles/Product.module.css'

export default function Product (){
  const [isData, setIsData] = useState(data)
  const [isFound, setIsFound] = useState('')
  const [isSelect, setIsSelect] = useState('')

  const onChangeSearch = (e) =>{
    console.log(e.target.value);
    setIsFound(e.target.value);
  }
  const onSelected = (e) =>{
    setIsSelect(e.target.value);
    console.log(e.target.value);
  }

  useEffect(()=>{
    if(isSelect || isFound){
      const filterData = data.filter((i)=>(i.brand === isSelect) || i.name === isFound)
      // isfound in case sensitive filter
      setIsData(filterData)
    }else if(isSelect){
      const filterData = data.filter((i)=>(i.brand === isSelect))
      setIsData(filterData)
    }else if(isFound){
      const filterData = data.filter((i)=>(i.name === isFound))
      setIsData(filterData)
    }else{
      setIsData(data)
    }
  })
  // useEffect(()=>{
  //   if(isFound){
  //     const filterData = data.filter((i)=>(i.name === isFound))
  //     setIsData(filterData)
  //   }else{
  //     setIsData(data)
  //   }
  // })
 

  return (
    <div className={styles.container}>
      <Navbar/>
      <Search
        onChangeInput={onChangeSearch}
        value={isFound}
      />
      <Select
        onChangeSelect={onSelected}
      />
      
      <div className={styles.containerCard}>
        <div className={styles.row}>
          {isData.map((shoes, i)=>
            <div className={styles.col} key={i}>
              <Card
                img={'/sepatu.png'}
                name={shoes.name}
                price={shoes.price}
                ratting={shoes.rating}
              />
            </div>
          )}
        </div>
      </div>
     
    </div>
  )
}