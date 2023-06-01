import { ModalUser } from 'components/ModalUser/ModalUser';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ListNested, XLg } from 'react-bootstrap-icons';
import { userService } from 'services';
import style from './Navbar.module.css';

function Navbar() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subcription = userService.user.subscribe((x) => setUser(x));
    return () => subcription.unsubscribe();
  }, []);

  const isMenuShownHandler = () => {
    setIsMenuShown(!isMenuShown);
  };
  if (!user) return null;

  return (
    <nav className={style.navbar}>
      <Link href="/">
        <div className={style.navbar__brand} />
      </Link>
      <ul className={`${style.navbar__menus} ${isMenuShown && style.navbar__menus_active}`}>
        <Link href="/"><li className={style.navbar__menu}>Home</li></Link>
        <Link href="/products"><li className={style.navbar__menu}>Product</li></Link>
        <li className={style.navbar__menu_closed} onClick={isMenuShownHandler}><XLg width="20" height="20" /></li>
      </ul>
      <div className={style.navbar__actions}>
        <ModalUser />
        <ListNested onClick={isMenuShownHandler} className={style.navbar__toggel} width="24" height="24" style={{ marginTop: `${2}px` }} />
      </div>
    </nav>
  );
}

export default Navbar;
