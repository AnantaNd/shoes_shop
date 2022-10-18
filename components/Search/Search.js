// import { Search } from "react-bootstrap-icons"
import styles from "./Search.module.css"


export default function Search ({onChangeInput, value}){

  return (
    <div className={styles.container}>
      <input 
        className={styles.inputStyle}
        onChange={onChangeInput}
        value={value}
        type="text"
        placeholder="Search"
      />
      {/* <Search  width="24" height="24"/> */}
    </div>
  )
}