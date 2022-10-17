import React, { useEffect, useState } from 'react'
import Layouts from '../../components/Layouts/Layouts'
import Head from 'next/head'
import styles from './Favorites.module.css'
import Section from '../../components/Section/Section'
import Select from '../../components/Select/Select'
import Card from '../../components/Card/Card'

const index = () => {
    const [data, setData] = useState([])

    const onSelectHandler = (e) => {
        // const dataFiltered = data.
        //     filter(product => {
        //         if (e.target.value) {
        //             return product.brand === e.target.value
        //         }
        //         return true
        //     })
        // setData(dataFiltered)
    }

    const fetchApiAsyncAwait = async () => {
        try {
            const response = await fetch("/api/products")
            const data = await response.json()
            setData(data)
        } catch (err) {
            console.error('Error' + err);
        }
    }

    useEffect(() => {
        fetchApiAsyncAwait()
    }, [])


    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layouts>
                <Section>
                    <div className={styles.container}>
                        <div className={styles.filter}>
                            <Select onChangeSelect={onSelectHandler} />
                        </div>
                        <div className={styles.favorite__products}>
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
        </>
    )
}

export default index
