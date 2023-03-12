// import { Search } from "react-bootstrap-icons"
import { BiSearch } from 'react-icons/bi'
import { MdClear } from 'react-icons/md'
import styles from "./Search.module.css"


export default function Search ({onChangeInput, value, onSearch, onClear}){

  return (
    <div className={styles.container}>
      <input 
        className={styles.inputStyle}
        onChange={onChangeInput}
        value={value}
        type="text"
        placeholder="Search"
      />
      {
        !value? 
        
        <button onClick={onSearch} className={styles.btn}><BiSearch style={{textAlign: 'center', fontWeight: 600}} /></button>
        :
        <button onClick={onClear} className={styles.btn}><MdClear/></button>

      }
      {/* <Search  width="24" height="24"/> */}
    </div>
  )
}