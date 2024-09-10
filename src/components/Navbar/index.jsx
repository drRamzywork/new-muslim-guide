import React from 'react'
import { IoIosSearch } from "react-icons/io";
import styles from './index.module.scss'
const Navbar = () => {
  return (
    <>
      <nav id='navbar' className={styles.navbar}>
        <div className="container">
          <div className={styles.sec_container}>
            <div className={styles.logo}>
              <img src="/assets/svgs/logo.svg" alt="" />
              <h1>new muslim guide</h1>
            </div>

            <div className={styles.btns_container}>
              <div className={styles.btn}>
                <p>en</p>
              </div>

              <div className={styles.btn}>
                <IoIosSearch />
              </div>
              <div className={styles.btn}>
                <img src='/assets/svgs/book.svg' alt='' />
              </div>
              <div className={styles.btn}>
                <img src='/assets/svgs/boxes.svg' alt='' />
              </div>
            </div>
          </div>

          <div className={styles.search}>
            <div className={styles.input_container}>

              <input type="text" />
              <div className={styles.icon_container}>
                <IoIosSearch />
              </div>

            </div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar