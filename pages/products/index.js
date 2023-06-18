import { Grid, Pagination } from '@mui/material';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import Filter from '../../components/Filter/Filter';
import Search from '../../components/Search/Search';
import Section from '../../components/Section/Section';
import style from './Products.module.css';
import usePagination from './usePagination';

const DynamicCard = dynamic(() => import('../../components/Card/Card'), {
  loading: () => <p>loading....</p>,
  ssr: false,
});

export default function index({ product }) {
  const [data, setData] = useState(product);
  const [openFilter, setOpenFilter] = useState(false);
  const [dataSearch, setDataSearch] = useState('');
  const [checkRating, setCheckRating] = useState('');
  const [hasDiscount, setHasDiscount] = useState(false);
  const [lastestShoes, setLastestShoes] = useState(false);
  const [brand, setBrand] = useState('');
  const [page, setPage] = useState(1);

  const PER_PAGE = 10;
  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const dotPrice = (numb) => numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const priceDisc = (numb, disc) => {
    const temp = (numb * disc) / 100;
    return parseInt(numb - temp);
  };

  const closeModal = () => {
    setOpenFilter(false);
    setData(product);
    setCheckRating('');
    setHasDiscount('');
    setBrand('');
    setLastestShoes('');
  };
  const openModal = () => {
    setOpenFilter(true);
  };
  const handleClearSearch = () => {
    if (dataSearch != '') {
      setDataSearch('');
      setData(product);
    }
  };
  const handleRating = (e) => {
    setCheckRating(e.target.value);
  };
  const onChangeSearch = (e) => {
    setDataSearch(e.target.value);
  };
  const handleDiscount = (e) => {
    setHasDiscount(e.target.checked);
  };
  const handleLastest = (e) => {
    setLastestShoes(e.target.checked);
  };
  const handleBrand = (e) => {
    setBrand(e.target.value);
  };

  const searchShoes = (temp) => {
    if (!dataSearch) {
      return temp;
    }
    const searchShoes = dataSearch.toLowerCase();
    const foundShoes = temp.filter((shoes) => shoes.name.toLowerCase().includes(searchShoes) || shoes.brand.toLowerCase().includes(searchShoes));
    return foundShoes;
  };
  const filterRating = (temp) => {
    if (!checkRating) {
      return temp;
    }
    const shoesRating = temp.filter((data) => data.rating == checkRating);
    return shoesRating;
  };
  const filterDiscount = (temp) => {
    if (!hasDiscount) {
      return temp;
    }
    const shoesDiscount = temp.filter((data) => data.discount);
    return (shoesDiscount);
  };
  const filterCollection = (temp) => {
    if (!lastestShoes) {
      return temp;
    }
    const newCollection = temp.filter((data) => data.tag);
    return (newCollection);
  };
  const filterBrand = (temp) => {
    if (!brand) {
      return temp;
    }
    const filterShoes = temp.filter((shoes) => (shoes.brand == brand));
    return filterShoes;
  };
  useEffect(() => {
    let filterData = filterBrand(product);
    filterData = searchShoes(filterData);
    filterData = filterRating(filterData);
    filterData = filterDiscount(filterData);
    filterData = filterCollection(filterData);
    setData(filterData);
  }, [dataSearch, checkRating, hasDiscount, brand, lastestShoes]);

  return (
    <>
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
          </div>
          <div className={style.wrapperBtnFilter}>
            <button className={style.btnFilter} onClick={openModal}>
              <FaFilter />
              {' '}
              Filter
            </button>
            <button className={style.btnClear} onClick={closeModal}>Clear Filter</button>
          </div>
          <p className={style.length_products}>
            displaying <span> {_DATA?.currentData().length} products</span> out of {product?.length} existing products
          </p>
          {/* <div className={style.wrapperDisplayFilter}>
            <p>{brand}</p>
            <p>{checkRating}</p>
            <p>{hasDiscount === true ? 'have discount' : ''}</p>
            <p>{lastestShoes === true ? 'new collection' : ''}</p>
          </div> */}
          {!openFilter ? ''
            : (
              <Filter
                handleCloseFilter={() => setOpenFilter(false)}
                onRating={handleRating}
                onDiscount={handleDiscount}
                onBrand={handleBrand}
                onLastest={handleLastest}
              />
            )}
        </Section>
        <Section>
          <div className={style.products}>
            {data?.length != 0 && _DATA.currentData().map((shoes, i) => (
              <DynamicCard
                key={i}
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
            ))}
          </div>
        </Section>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Grid item>
            <p className={style.infoPage}>
              Page:
              <span>{page}</span>
              {' '}
              of
              {count}
            </p>
          </Grid>
          <Grid item xs={3}>
            <Pagination
              count={count}
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
              color="primary"
              boundaryCount={2}
            />
          </Grid>
        </Grid>
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
