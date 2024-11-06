import Navbar from '@/components/Navbar'
import React from 'react'
import styles from './index.module.scss';
import Link from 'next/link';

const Preliminaries = ({ dataAllCategories }) => {
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
              <Link href={'/preliminaries/1'} className={styles.box}>
                <div className={styles.img_container}>
                  <img src="/assets/svgs/herobg.svg" alt="" />
                </div>
                <div className={styles.title}>
                  <p>How to Find out about the Rulings of Islam</p>
                </div>
              </Link>
              <Link href={'/preliminaries/2'} className={styles.box}>
                <div className={styles.img_container}>
                  <img src="/assets/imgs/bg2.png" alt="" />
                </div>
                <div className={styles.title}>
                  <p>Islam is a Moderate Religion</p>
                </div>
              </Link>
              <Link href={'/preliminaries/3'} className={styles.box}>
                <div className={styles.img_container}>
                  <img src="/assets/svgs/lock.svg" alt="" />
                </div>
                <div className={styles.title}>
                  <p>The Five Necessities</p>
                </div>
              </Link>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Preliminaries



export async function getStaticProps({ locale }) {

  const resDataAllSections = await fetch(`https://iiacademy.net/api/preliminaries`, {
    method: 'GET',
    headers: {
      "locale": locale,
    },

  });
  const dataAllSections = await resDataAllSections.json()

  const resDataAllLangs = await fetch(`https://iiacademy.net/api/languages`, {
    method: 'GET',
    headers: {
      "locale": locale,
    },

  });
  const dataAllLangs = await resDataAllLangs.json()

  const resDataAllCategories = await fetch(`https://iiacademy.net/api/categories`, {
    method: 'GET',
    headers: {
      "locale": locale,
    },

  });
  const dataAllCategories = await resDataAllCategories.json()

  const resDataAllSettings = await fetch(`https://iiacademy.net/api/settings`, {
    method: 'GET',
    headers: {
      "locale": locale,
    },

  });
  const dataAllSettings = await resDataAllSettings.json()

  return {
    props: {
      dataAllSections: dataAllSections.data[0] || {},
      dataAllLangs: dataAllLangs.data || [],
      dataAllSettings: dataAllSettings.data || [],
      dataAllCategories: dataAllCategories.data || [],
    },
    revalidate: 10,
  }
}

