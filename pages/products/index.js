/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Grid, Pagination } from '@mui/material'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Filter from '../../components/Filter/Filter'
import Layouts from '../../components/Layouts/Layouts'
import Search from '../../components/Search/Search'
import Section from '../../components/Section/Section'
import style from './Products.module.css'
import usePagination from './usePagination'
// import Card from '../../components/Card/Card'

// lazy load 
const DynamicCard = dynamic(()=>import('../../components/Card/Card'),{
  loading: () => <p>loading....</p>,
  ssr: false,
})


export default function index({product}) {
  const [data, setData] = useState(product)
  const [openFilter, setOpenFilter] = useState(false)
  const [dataSearch, setDataSearch] = useState('')
  // const [sortShoes, setSortShoes] = useState('')
  const [checkRating, setCheckRating] = useState('')
  const [hasDiscount, setHasDiscount] = useState(false)
  const [lastestShoes, setLastestShoes] = useState(false)
  const [brand, setBrand] = useState('')
  const [page, setPage] = useState(1)


  // pagination
  const PER_PAGE = 10
  const count = Math.ceil(data.length/PER_PAGE)
  const _DATA = usePagination(data, PER_PAGE)
  const handleChange =(e, p)=>{
    setPage(p)
    _DATA.jump(p)
  }

  const dotPrice =(numb)=>{
    return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
  const priceDisc=(numb, disc)=>{
    const temp = numb/disc
    return parseInt(numb-temp)
  }

  // event handlers
  const closeModal =()=>{
    setOpenFilter(false)
    setData(product)
    setCheckRating('')
    setHasDiscount('')
    setBrand('')
    setLastestShoes('')
  }
  const openModal =()=>{
    setOpenFilter(true)
  }
  const handleClearSearch =()=>{
    if(dataSearch!= ''){
      setDataSearch('')
      setData(product)
    }
  }
  const handleRating = (e) =>{
    setCheckRating(e.target.value)
    // console.log(e.target.value)
  }
  const onChangeSearch = (e) => {
    setDataSearch(e.target.value);
  }
  const handleDiscount = (e) => {
    setHasDiscount(e.target.checked);
    console.log(e.target.checked);
  }
  const handleLastest = (e) => {
    setLastestShoes(e.target.checked);
  }
  const handleBrand = (e) => {
    setBrand(e.target.value);
    console.log(e.target.value);
  }
  const handleSort = (e) => {
    setSortShoes(e.target.value)
    // console.log(e.target.value);
  }
  
  //search by name shoes
  const searchShoes = (temp) =>{
    if(!dataSearch){
      return temp
    }
    const searchShoes = dataSearch.toLowerCase()
    const foundShoes = temp.filter((shoes)=>shoes.name.toLowerCase().includes(searchShoes) || shoes.brand.toLowerCase().includes(searchShoes))
    return foundShoes
  }
  // filter by rating
  const filterRating = (temp) => {
    if(!checkRating){
      return temp
    }
    const shoesRating = temp.filter((data)=> data.rating == checkRating)
    return shoesRating
  }
  // filter has discount 
  const filterDiscount = (temp) =>{
    if(!hasDiscount){
      return temp
    }
    const shoesDiscount = temp.filter((data)=>data.discount)
    // console.log(shoesDiscount)
    return (shoesDiscount)
  }
  // filter has new collection
  const filterCollection = (temp) =>{
    if(!lastestShoes){
      return temp
    }
    const newCollection = temp.filter((data)=>data.tag)
    return (newCollection)
  }
   // filter by brand
   const filterBrand = (temp) =>{
    if(!brand){
      return temp
    }
    const filterShoes = temp.filter((shoes)=>(shoes.brand == brand))
    return filterShoes
  }
  // select sorting shoes not fix
  // const sortingShoes = (temp) => {
  //   if(!sortShoes){
  //     return temp
  //   }
  //   const sortData = temp.sort((a, b)=> (b.price > a.price ? 1 : -1))
  //   return sortData
  //   // if(sortShoes === 'maxPrice'){
  //   //   const sortData = temp.sort((a, b)=> (b.price > a.price ? 1 : -1))
  //   //   return sortData
  //   // }
  //   // if(sortShoes === 'minPrice'){
  //   //   const sortData = temp.sort((a, b)=> (a.price > b.price ? 1 : -1))
  //   //   return sortData
  //   // }
  // }

  // lifecycle filter data
  useEffect(()=>{
    let filterData = filterBrand(product)
    filterData = searchShoes(filterData)
    filterData = filterRating(filterData)
    filterData = filterDiscount(filterData)
    filterData = filterCollection(filterData)
    setData(filterData)

   
  }, [dataSearch, checkRating, hasDiscount, brand, lastestShoes])

  // useEffect(()=>{
  //   if(!sortShoes){
  //     setData(product)
  //   }else if(sortShoes === 'maxPrice'){
  //     const sorting = data.filter((shoes)=> )
  //     setData(sorting)
  //   }
  //   console.log(data)
  // },[])


  return (
    <Layouts>
      <Head>
        <title>Shoes Shop | Products</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className={style.container}>
        <Section>
          <div className={style.filter}>
            <Search
              onChangeInput={onChangeSearch}
              value={dataSearch}
              onClear={handleClearSearch}
            />
            {/* <Select
              onChangeSelect={handleSort}
              value={sortShoes}
            /> */}
          </div>
          <div className={style.wrapperBtnFilter}>
            <button className={style.btnFilter} onClick={openModal}><FaFilter/> Filter</button>
            <button className={style.btnClear} onClick={closeModal}>Clear Filter</button>
          </div>
          <p className={style.length_products}>display <span>{data?.length} products</span> of {product?.length} products</p>
          {brand||hasDiscount||lastestShoes||checkRating ?
            <div className={style.wrapperDisplayFilter}>
              <h1 className={style.titleDisplayFilter}>Aplied Filter :</h1>
              <div className={style.wrapperFilter}>
                <p className={style.textFilter}>{brand}</p>
                <p className={style.textFilter}>{hasDiscount==true? 'Discount': ''}</p>
                <p className={style.textFilter}>{lastestShoes==true? 'New Collection': ''}</p>
                <p className={style.textFilter}>{checkRating}</p>
              </div>
            </div>:''
          }
          {!openFilter? ''
            :
            <Filter 
              handleCloseFilter={()=>setOpenFilter(false)}
              onRating={handleRating}
              onDiscount={handleDiscount}
              onBrand={handleBrand}
              onLastest={handleLastest}
            />
          }
        </Section>
        <div className={style.wrapperProduct}>
            <div className={style.products}>
                {data?.length != 0 && _DATA.currentData().map((shoes, i) =>
                  <DynamicCard key={i}
                    idProduct={shoes.id}
                    tagNew={shoes.tag}
                    img={shoes.img}
                    disc={shoes.discount}
                    name={shoes.name}
                    price={dotPrice(shoes.price)}
                    priceAftDisc={dotPrice(priceDisc(shoes.price, shoes.discount))}
                    ratting={shoes.rating}
                    brand={shoes.brand}
                    dataSize={shoes.size}
                  />
                )}
            </div>
        </div>
        <Grid 
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}>
          <Grid item>
            <p className={style.infoPage}>Page: <span>{page}</span> of {count}</p>
          </Grid>
          <Grid item xs={3}>
            <Pagination
              count={count}
              page={page}
              variant='outlined'
              shape='rounded'
              onChange={handleChange}
              color='primary'
              boundaryCount={2}
            />
          </Grid>
        </Grid>
        </div>
    </Layouts>
  )
}
export async function getStaticProps(){
  try{
    const res = await fetch('http://localhost:3000/api/product')
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
