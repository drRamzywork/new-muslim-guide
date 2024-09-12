import Navbar from '@/components/Navbar'
import React from 'react'
import styles from './index.module.scss';

const Preliminaries = () => {
  return (
    <>
      <Navbar />
      <section id='preliminaries' className={styles.preliminaries}>
        <div className="container">
          <div className={styles.sec_contaienr}>
            <div className={styles.sec_title}>
              <h2>Preliminaries</h2>
            </div>

            <div className={styles.boxes_container}>
              <div className={styles.box}>
                <div className={styles.img_container}>
                  <img src="/assets/svgs/herobg.svg" alt="" />
                </div>
                <div className={styles.title}>
                  <p>How to Find out about the Rulings of Islam</p>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.img_container}>
                  <img src="/assets/imgs/bg2.png" alt="" />
                </div>
                <div className={styles.title}>
                  <p>Islam is a Moderate Religion</p>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.img_container}>
                  <img src="/assets/svgs/lock.svg" alt="" />
                </div>
                <div className={styles.title}>
                  <p>The Five Necessities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Preliminaries