import React from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/router';
import Link from 'next/link';
const Footer = ({ dataAllLangs, dataAllCategories }) => {
  const router = useRouter();



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
                {dataAllCategories?.map((sec, idx) => (
                  <li key={idx} onClick={() => setMenu(false)}>
                    <Link href={sec.slug === "preliminaries" ? "/preliminaries" : `/section/${sec.slug}`}>
                      <p>{sec.name}</p>
                    </Link>
                  </li>
                ))}


              </ul>
            </div>

            <div className={styles.sec}>
              <ul>

                {Object.entries(dataAllLangs).map(([code, language]) => (
                  <li key={code}>
                    <a
                      href={`/${code}${router.asPath}`}>{language?.native}
                    </a>
                  </li>
                ))}

              </ul>





            </div>

          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer