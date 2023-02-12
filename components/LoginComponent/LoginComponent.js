import Style from './LoginComponent.module.css'

function LoginComponent(){
  return(
    <div className={Style.container}>
      {/* <h1>Shoes 'Store</h1> */}
      <h1>Masuk</h1>
      <p>Cari Sepatu terbaik mu dengan Shoes Store</p>
      <div className={Style.container_btn}>
        <button className={Style.btn}>Masuk dengan google</button>
        <button className={Style.btn}>Masuk dengan facebook</button>
      </div>
      <div className={Style.container_helper}>
        <p className={Style.helper}>Belum memiliki akun ?<span>daftar</span></p>
      </div>
    </div>
  )
}

export default LoginComponent