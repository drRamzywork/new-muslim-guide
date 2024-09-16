import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'


const Hero = () => {
  const [isImg_1Active, setIsImg_1Active] = useState(false);
  const [isImg_2Active, setIsImg_2Active] = useState(false);

  useEffect(() => {
    setIsImg_1Active(true)
    setIsImg_2Active(true)
  }, [])
  return (
    <section id='hero' className={styles.hero}>
      <div className="container">

        <div className={styles.sec_container}>
          <div className={styles.img_container}>
            <img className={`${styles.img_1} ${isImg_1Active && styles.active}`} src="/assets/svgs/img_1.svg" alt="" />
            <img className={`${styles.img_2} ${isImg_2Active && styles.active}`} src="/assets/svgs/img_2.svg" alt="" />
          </div>


          <div className={styles.text_container}>
            <Link href={'/preliminaries'} className={styles.title}>
              <h2>Preliminaries</h2>
            </Link>
            <div className={styles.desc}>
              <p>How to Find out about the Rulings of Islam</p>
            </div>
          </div>


          <div className={styles.section}>
            <div className={styles.box}>
              <div className={styles.text}>
                <p>Simple Rules and Important Islamic Guidelines for New Muslims in all Aspects of Life</p>
              </div>

              <div className={styles.img_container}>
                <img src="/assets/imgs/image1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero