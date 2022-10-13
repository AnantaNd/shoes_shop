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
            <div className={style.navbar__brand}>
                {'ShoesStore'}
            </div>
            <ul className={`${style.navbar__menus} ${isMenuShown&&style.navbar__menus_active}`}>
                <li className={`${style.navbar__menu} + ${style.navbar__menu_active}`}> <Link href='/'>Home</Link></li>
                <li className={style.navbar__menu}><Link href='/'>Shop</Link></li>
                <li className={style.navbar__menu}><Link href='/product'>Product</Link></li>
                <li className={style.navbar__menu}><Link href='/'>Service</Link></li>
                <li className={style.navbar__menu}><Link href='/'>Contact</Link></li>
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
