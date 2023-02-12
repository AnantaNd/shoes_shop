import Image from "next/image"
import LoginComponent from "../../../components/LoginComponent/LoginComponent"
import Style from './Login.module.css'
function index(){
  return(
   <div className={Style.container}>
      <div className={Style.content}>
        <Image alt="ilustration" src='/background.jpg' width={480} height={480} priority={true} className={Style.img} />
        <LoginComponent/>
        {/* <BtnFilter/> */}
      </div>
   </div>
  )
}
export default index