import React from 'react'
import styles from './index.module.scss'
const Footer = () => {
  return (
    <footer id='footer' className={styles.footer}>

      <div className={styles.logo_container}>
        <div className="container">
          <div className={styles.logo}>
            <img src="/assets/svgs/logo.svg" alt="" />

            <h5>new muslim guide</h5>
          </div>
        </div>
      </div>


      <div className={styles.links_container}>
        <div className="container">
          <div className={styles.sec_container}>
            <div className={styles.sec}>
              <div className={styles.sec_title}>
                <h5>sections</h5>
              </div>
              <ul>
                <li>Preliminaries</li>
                <li>Your Prayer</li>
                <li>Your Fast</li>
                <li>Your Pilgrimage</li>
                <li>Your Financial Transactions</li>
                <li>Your Food and Drink</li>
                <li>Your Dress Code</li>
                <li>Your New Life</li>
              </ul>
            </div>
            <div className={styles.sec}>
              <ul>
                <li>العربية</li>
                <li>English</li>
                <li>Filipino</li>
                <li>Françaisርኛ</li>
                <li>Bosanski</li>
                <li>简体中文</li>
                <li>Deutsch</li>
                <li>Ελληνικά</li>
                <li>Italiano</li>
                <li>日本語</li>
                <li>한국어</li>
                <li>Nepali</li>
                <li>Polski</li>
                <li>Português</li>
                <li>Română</li>
                <li>Русский</li>
                <li>Slovenščina</li>
                <li>Español</li>
                <li>Svenska</li>
                <li>தமிழ்</li>
                <li>Українська</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer