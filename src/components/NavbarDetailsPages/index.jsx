import React from 'react'
import { IoIosSearch } from "react-icons/io";
import styles from './index.module.scss'
import Link from 'next/link';


const NavbarDetailsPages = ({ imgsrc }) => {
  return (
    <nav id='navbar' className={styles.navbar}>
      <div className={styles.bg_contaienr}>
        <img src={imgsrc} alt="" />
      </div>
      <div className="container">
        <div className={styles.sec_container}>
          <Link href={'/'} className={styles.logo}>
            <img src="/assets/svgs/logo.svg" alt="" />
            <h1>new muslim guide</h1>
          </Link>

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



      </div>
    </nav>)
}

export default NavbarDetailsPages