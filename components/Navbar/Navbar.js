import Link from 'next/link'
import React, { useState } from 'react'
import { Cart, Heart, ListNested, XLg } from 'react-bootstrap-icons'
import style from './Navbar.module.css'

const Navbar = () => {
    const [isMenuShown, setIsMenuShown] = useState(false)

    const isMenuShownHandler = () => {
        setIsMenuShown(!isMenuShown)
    }

    return (
        <nav className={style.navbar}>
            <Link href="/">
                <div className={style.navbar__brand}>
                    Shoes{"\'"}Store
                </div>
            </Link>
            <ul className={`${style.navbar__menus} ${isMenuShown && style.navbar__menus_active}`}>
                <Link href="/"><li className={`${style.navbar__menu} + ${style.navbar__menu_active}`}>Home</li></Link>
                <Link href="/"><li className={style.navbar__menu}>Shop</li></Link>
                <Link href="/products"><li className={style.navbar__menu}>Product</li></Link>
                <Link href="/"><li className={style.navbar__menu}>Service</li></Link>
                <Link href="/"><li className={style.navbar__menu}>Contact</li></Link>
                <li className={style.navbar__menu_closed} onClick={isMenuShownHandler}><XLg width="20" height="20" /></li>
            </ul>
            <div className={style.navbar__actions}>
            <Link href="/cart"><Cart className={style.navbar__action} width="24" height="24" /></Link>
                <Heart className={style.navbar__action} width="24" height="24" style={{ marginTop: 2 + "px" }} />
                <div className={`${style.navbar__action} + ${style.account}`}></div>
                {
                    <ListNested onClick={isMenuShownHandler} className={style.navbar__toggel} width="24" height="24" style={{ marginTop: 2 + "px" }} />
                }
            </div>
        </nav>
    )
}

export default Navbar
