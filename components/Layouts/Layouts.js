import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'

const Layouts = ({children}) => {
    return (
        <div className={styles.layout}>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layouts
