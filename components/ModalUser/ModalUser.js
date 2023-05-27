import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { RiHistoryLine } from 'react-icons/ri'
import { userService } from 'services'
import style from './ModalUser.module.css'

export const ModalUser = () => {

  const [isShow, setShow] = useState(false)
  const [user, setUser] = useState(null)
  // const {data : session} = useSession()


  const handleModal =()=>{
      setShow(!isShow)
      // console.log('click')
  }
  // const {data : session} = useSession()

  useEffect(()=>{
    const subcription = userService.user.subscribe(temp => setUser(temp))
    return ()=>subcription.unsubscribe()
  })
  function logOut(){
    userService.logout()
  }
  if(!user) return null



  return (
    <>
      <div className={style.wrapperIcon} onClick={handleModal}>
        <FaUser size={20}/>
      </div>
      <div className={isShow? `${style.containerShow}`:`${style.containerHide}`}>
        <div className={style.containerContent}>
          <FaUser className={style.img} size={30}/>
          <div className={style.wrapper}>
            <p className={style.userName}>{userService? userService.userValue.firstName : 'World'}</p>
            <p className={style.email}>{!userService? 'helo@world.com': userService?.userValue.email}</p> 
            <p className={style.membership}>Membership: <span>hardcode</span></p>
          </div>
        </div>
        <div className={style.sparator}></div>
        <ul className={style.menu}>
            <Link href='/history'>
              <li className={style.listMenu}>
                <RiHistoryLine size={'20px'}/>
                <p>History</p>
              </li>
            </Link>
            <li className={style.listMenu} onClick={logOut}>
              <FiLogOut size={'20px'} className={style.iconLogout}/>
              <p>Log Out</p> 
            </li>
        </ul>
      </div>
    </>
  )
}
