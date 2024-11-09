import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import styles from './index.module.scss'
import { useRouter } from 'next/router';
import { useMenu } from '@/contexts/MenuContext';
import { IoIosClose } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import Link from 'next/link';

const Navbar = ({ dataAllLangs, dataAllSettings, dir }) => {
  const router = useRouter();
  const { menulang, setMenuLang, searchMenu, setSearchMenu } = useMenu();
  const { locale } = useRouter()

  const { pathname } = useRouter()
  return (
    <>
      <nav id='navbar' className={styles.navbar} dir={dir}>

        <div className="container">
          <div className={styles.sec_container}>
            <Link href={'/'} className={styles.logo}>
              <img src={dataAllSettings?.site_logo} alt={dataAllSettings?.site_name} />
              <h1>{dataAllSettings?.site_name}</h1>
            </Link>

            <div className={styles.btns_container}>


              <div className={styles.btn} onClick={() => setMenuLang(true)}>
                <p>{locale}</p>
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

          {pathname === '/' &&
            <div className={styles.search}>
              <div className={styles.input_container}>

                <input type="text" />
                <div className={styles.icon_container}>
                  <IoIosSearch />
                </div>

              </div>
            </div>
          }

        </div>
      </nav>




      {menulang &&
        <div className={styles.menu_container} dir={dir}>
          <div className={styles.menu_nav}>
            <div className={styles.close_btn} onClick={() => setMenuLang(false)}>
              <IoIosClose />
            </div>

            <div className={styles.langs}>
              <TfiWorld />

            </div>
          </div>
          <ul>

            {Object.entries(dataAllLangs).map(([code, language]) => (

              <li key={code}>
                <a href={`/${code}${router.asPath}`} className="box">
                  <p>{language?.native}</p>
                  <div className={`${styles.circle} ${code === locale && styles.active}`} />
                </a>
              </li>
            ))}

          </ul>
        </div>
      }


      {menulang &&
        <div className={styles.layer} onClick={() => setMenuLang(false)} />
      }
    </>
  )
}

export default Navbar