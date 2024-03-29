import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { RiHistoryLine } from 'react-icons/ri';
import { userService } from 'services';
import style from './ModalUser.module.css';

export function ModalUser() {
  const [isShow, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const [data, setData] = useState();

  const getItemLocal = () => {
    const item = localStorage.getItem('history');
    const parseItem = JSON.parse(item);
    const x = parseItem?.filter((data) => data.name == userService?.userValue.firstName);
    setData(x);
  };

  useEffect(() => {
    getItemLocal();
  }, []);

  const memberShipType = (data) => {
    if (data?.length >= 3 && data?.length <= 4) {
      return 'Silver';
    } if (data?.length >= 5 && data?.length <= 8) {
      return 'Gold';
    } if (data?.length >= 8) {
      return 'Platinum';
    }
  };

  const memberBenefit = (data) => {
    if (memberShipType(data) == 'Silver') {
      return 3;
    } if (memberShipType(data) == 'Gold') {
      return 5;
    } if (memberShipType(data) == 'Platinum') {
      return 8;
    }
  };

  const handleModal = () => {
    setShow(!isShow);
  };

  useEffect(() => {
    const subcription = userService.user.subscribe((temp) => setUser(temp));
    return () => subcription.unsubscribe();
  });
  function logOut() {
    userService.logout();
  }
  if (!user) return null;

  return (
    <>
      <div className={style.wrapperIcon} onClick={handleModal}>
        <FaUser size={20} />
      </div>
      <div className={isShow ? `${style.containerShow}` : `${style.containerHide}`}>
        <div className={style.containerContent}>
          <FaUser className={style.img} size={30} />
          <div className={style.wrapper}>
            <p className={style.email}>{!userService ? 'helo@world.com' : userService?.userValue.email}</p>
            <p className={style.membership}>
              Membership: <span>{memberShipType(data)}</span>
            </p>
            <p className={style.membership}>
              Banefit discount:
              {memberBenefit(data)?
               <span> {memberBenefit(data)} %</span>
               :
               <span> 0 %</span>
              }
            </p>
          </div>
        </div>
        <div className={style.sparator} />
        <ul className={style.menu}>
          <Link href="/history">
            <li className={style.listMenu}>
              <RiHistoryLine size="20px" />
              <p>History</p>
            </li>
          </Link>
          <li className={style.listMenu} onClick={logOut}>
            <FiLogOut size="20px" className={style.iconLogout} />
            <p>Log Out</p>
          </li>
        </ul>
      </div>
    </>
  );
}
