import styles from './Select.module.css'

export default function Select({onChangeSelect, value}){

  return (
    <div className={styles.container}>
      {/* <label>Brand</label> */}
      <select className={styles.selectStyle} onChange={onChangeSelect} value={value}>
        <option className={styles.selectItem} value="">All Brands</option>
        <option className={styles.selectItem} value="nike">nike</option>
        <option className={styles.selectItem} value="reebok">reebok</option>
        <option className={styles.selectItem} value="addidas">addidas</option>
      </select>

    </div>
  )
}