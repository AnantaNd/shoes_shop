import styles from './Select.module.css'

export default function Select({onChangeSelect, value}){

  return (
    <div className={styles.container}>
      {/* <label>Brand</label> */}
      <select className={styles.selectStyle} onChange={onChangeSelect} value={value}>
        <option className={styles.selectItem} value="">Select Sorting</option>
        <option className={styles.selectItem} value="maxPrice">Highest Price</option>
        <option className={styles.selectItem} value="lowPrice">Lowest Price</option>
        <option className={styles.selectItem} value="maxRating">Highest Rating</option>
        <option className={styles.selectItem} value="lowRating">Lowest Rating</option>
      </select>

    </div>
  )
}