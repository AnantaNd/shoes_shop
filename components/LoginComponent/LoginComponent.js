import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Input from '../Input/Input';
import Style from './LoginComponent.module.css';

function LoginComponent(){
  return(
    <>
  
      <div className={Style.container}>
        {/* <h1>Shoes 'Store</h1> */}
        <div className={Style.header}>
          <Link href={'/'}>
            <Image className={Style.img} src={'/shoesshop.svg'} alt='logo' width={70} height={70}/>
          </Link>
          <div className={Style.contentHeader}>
            <h1 className={Style.title}>Sign In</h1>
            <p className={Style.subTitle}>Find your best shoes with Shoes Shop</p>
          </div>
        </div>
        <form>
          <Input 
            label={'email'} 
            name={'email'} 
            placeholder={'email'} 
            helper={'masukan email'}/>
          <Input 
            label={'password'} 
            name={'password'}
            placeholder={'password'}
            helper={'masukan password'}/>
          <Input 
            label={'password'} 
            name={'password'}
            placeholder={'password'}
            helper={'masukan password'}/>
        </form>
        <hr></hr>
        <div className={Style.container_btn}>
          <button className={Style.btn}>
            <FcGoogle size={24} style={{ marginRight: "8px" }} />Masuk dengan Google
          </button>
          <button className={Style.btn}>
            <FaFacebook color="DodgerBlue" size={24} style={{ marginRight: "8px" }} />Masuk dengan Facebook
          </button>
        </div>
        <div className={Style.container_helper}>
          <p className={Style.helper}>Don&#39;t have an account yet ?<span> Sign Up</span></p>
        </div>
      </div>
    </>
  )
}

export default LoginComponent