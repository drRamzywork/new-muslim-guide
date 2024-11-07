import Navbar from '@/components/Navbar'
import React from 'react'
import styles from './index.module.scss';
import Link from 'next/link';
import { useMenu } from '@/contexts/MenuContext';

const Preliminaries = ({ dataPreliminaries, dataAllLangs }) => {
  const { menulang, setMenuLang, searchMenu, setSearchMenu } = useMenu();

  return (
    <>
      <Navbar dataAllLangs={dataAllLangs} />
      <section id='preliminaries' className={styles.preliminaries}>
        <div className="container">

          <div className={styles.sec_contaienr}>
            <div className={styles.sec_title}>
              <h2>Preliminaries</h2>
            </div>

            <div className={styles.boxes_container}>

              {dataPreliminaries?.posts.map((post, idx) => (
                <Link key={idx} href={'/preliminaries/1'} className={styles.box}>
                  <div className={styles.img_container}>
                    <img src={post.image} alt="" />
                  </div>
                  <div className={styles.title}>
                    <p>{post.title}</p>
                  </div>
                </Link>

              ))}


              {/* <Link href={'/preliminaries/2'} className={styles.box}>
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
              </Link> */}
            </div>
          </div>

        </div>

      </section>


      {menulang &&
        <div className={styles.layer} onClick={() => setMenuLang(false)} />
      }
    </>
  )
}

export default Preliminaries

export async function getStaticProps({ locale }) {
  const apiDomain = "https://newmuslimguide.rmz.one/api";

  const resPreliminaries = await fetch(`${apiDomain}/preliminaries`, {
    headers: {
      'locale': locale
    }
  })
  const dataPreliminaries = await resPreliminaries.json();

  const resAllSections = await fetch(`${apiDomain}/categories`, {
    headers: {
      'locale': locale
    }
  })
  const dataAllSections = await resAllSections.json();


  const resAllLangs = await fetch(`${apiDomain}/languages`, {
    headers: {
      'locale': locale
    }
  })
  const dataAllLangs = await resAllLangs.json();

  const resAllSettings = await fetch(`${apiDomain}/items`, {
    headers: {
      'locale': locale
    }
  })
  const dataAllSettings = await resAllSettings.json();


  const resDataAllCategories = await fetch(`${apiDomain}/categories`, {
    method: 'GET',
    headers: {
      "locale": locale,
    },

  });
  const dataAllCategories = await resDataAllCategories.json()


  return {
    props: {
      dataAllSections: dataAllSections?.data,
      dataPreliminaries: dataPreliminaries?.data[0],
      dataAllLangs: dataAllLangs?.data,
      dataAllSettings: dataAllSettings?.data,
      dataAllCategories: dataAllCategories.data || [],
    },
    revalidate: 10
  };
}
