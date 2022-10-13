import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'

const Layouts = ({childern}) => {
    return (
        <div className={styles.layout}>
            <Navbar/>
                {childern}
            <Footer/>
        </div>
    )
}

export default Layouts
