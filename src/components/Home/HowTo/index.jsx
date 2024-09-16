import React from 'react';
import styles from './index.module.scss';
import ArrowRight from '@/public/assets/svgs/ArrowRight';
import Link from 'next/link';

const HowTo = () => {
  return (
    <>
      <section id='how_to' className={styles.how_to}>
        <div className={styles.sec_container}>
          <div className={styles.cards_container}>
            <Link href={'/wudoo'} className={styles.card}>
              <div className={styles.img_container}>
                <img src="/assets/imgs/Wudoo.png" alt="" />
              </div>
              <div className={styles.title}>
                <h4>How to Perform Wudoo?</h4>
              </div>
            </Link>

            <div className={styles.card}>

              <div className={styles.title}>
                <h4>How to Pray (The Standing, Bowing and Prostrate Postures)</h4>
              </div>

              <div className={styles.icon_container}>
                <ArrowRight />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default HowTo