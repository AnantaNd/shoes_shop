import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.media}>
          <h4 className={styles.media_title}>Media Partner</h4>
          <p>nike.com</p>
          <p>adiddas.co.id</p>
          <p>reebok.com</p>
        </div>
        <div className={styles.media}>
          <h4 className={styles.media_title}>Social Media</h4>
          <p>Shoes Shop</p>
          <p>adiddas.co.id</p>
          <p>shoesshop@gmail.com</p>
        </div>
        <div className={styles.media}>
          <h4 className={styles.media_title}>FAQ</h4>
          <p>Guide</p>
          <p>Contact us</p>
        </div>
      </div>
      <div className={styles.copy_right}>
        copyright|2022
      </div>
    </footer>
  )
}