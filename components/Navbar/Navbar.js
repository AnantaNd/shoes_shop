import React, { useState } from 'react'
import { ListNested, XLg, Cart, Heart } from 'react-bootstrap-icons'
import style from './Navbar.module.css'

const Navbar = () => {
    const [isMenuShown, setIsMenuShown] = useState(false)

    const isMenuShownHandler = () => {
        setIsMenuShown(!isMenuShown)
    }

    return (
        <nav className={style.navbar}>
            <div className={style.navbar__brand}>
                {'ShoesStore'}
            </div>
            <ul className={`${style.navbar__menus} ${isMenuShown&&style.navbar__menus_active}`}>
                <li className={`${style.navbar__menu} + ${style.navbar__menu_active}`}>Home</li>
                <li className={style.navbar__menu}>Shop</li>
                <li className={style.navbar__menu}>Product</li>
                <li className={style.navbar__menu}>Services</li>
                <li className={style.navbar__menu}>Contacts</li>
                <li className={style.navbar__menu_closed} onClick={isMenuShownHandler}><XLg width="20" height="20"/></li>
            </ul>
            <div className={style.navbar__actions}>
                <Cart className={style.navbar__action} width="24" height="24"/>
                <Heart className={style.navbar__action} width="24" height="24" style={{ marginTop: 2 + "px" }}/>
                <div className={`${style.navbar__action} + ${style.account}`}></div>
                {
                    <ListNested onClick={isMenuShownHandler} className={style.navbar__toggel} width="24" height="24" style={{ marginTop: 2 + "px" }}/>
                }
            </div>
        </nav>
    )
}

export default Navbar
