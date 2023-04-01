import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import style from './ModalUser.module.css'

export const ModalUser = () => {

  const [isShow, setShow] = useState(false)
  const {data : session} = useSession()


  const handleModal =()=>{
      setShow(!isShow)
      // console.log('click')
  }


  return (
    <>
      <div className={style.wrapperIcon} onClick={handleModal}>
        <FaUser size={20}/>
      </div>
      <div className={isShow? `${style.containerShow}`:`${style.containerHide}`}>
        <div className={style.containerContent}>
          {session?
            <img className={style.img} src={session?.user?.image} width={40} height={40}/>:
            <FaUser className={style.img} size={30}/>
          }
          <div className={style.wrapper}>
            <p className={style.userName}>{session? `${session?.user?.name}`: 'hello world'}</p>
            <p className={style.email}>{session? `${session?.user?.email}`: 'helloworld@mail.com'}</p>
            {session? 
              <p className={style.membership}>Membership: <span>hardcode</span></p>:
              ''
            }
          </div>
        </div>
        <div className={style.sparator}></div>
        <ul className={style.menu}>
          {!session && (
            <>
              <Link href='/auth/login'>
                <li className={style.listMenu}>Sign In</li>
              </Link>
            </>
          )}
          {session && (
            <>
              <Link href='/history'>
                <li className={style.listMenu}>History Payment</li>
              </Link>
              <li className={style.listMenu} onClick={()=>signOut()}>Sign Out</li>
            </>
          )}
        </ul>
      </div>
    </>
  )
}
