import NavbarDetailsPages from '@/components/NavbarDetailsPages'
import React from 'react'
import styles from './index.module.scss'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
const preliminar = () => {
  return (
    <>
      <NavbarDetailsPages imgsrc={'/assets/svgs/herobg2.svg'} />
      <section id='preliminar' className={styles.preliminar}>
        <div className="container">

          <div className={styles.sec_container}>
            <div className={styles.title}>
              <h2>How to Find out about the Rulings of Islam</h2>
              <div className={styles.links}>
                <Link href={'/'} className={styles.icon_container}>
                  <img src="/assets/svgs/home.svg" alt="" />
                </Link>
                <IoIosArrowForward />
                <Link href={'/preliminaries'} className={styles.icon_container}>
                  <span>Preliminaries</span>
                </Link>

              </div>

            </div>


            <div className={styles.desc}>
              <p>
                If a person attracts an illness and wants to get medical treatment, he will definitely look for the most proficient doctors he could possibly find to obtain the most effective treatment possible for his illness. He will certainly not take a prescription from any doctor because his life is dear to him.





              </p>

              <p>
                Reading the present book, which teaches you matters, relating to your religion in their true light, is a step in the right direction. Searching for the right information requires you to ask scholars’ opinions. The present book serves you well because it contains scholar’s statements and answers to your queries. As the Qur’an states, “If you do not know, then ask the people of expert knowledge.” (Soorat An-Nahl, 16:43) You must also take further steps if you are in doubt as to any of Islamic rulings on any given issue. You can do this by contacting Islamic centres and mosques near you, ensuring that they are from amongst those adhering to the Qur’an and authentic Sunnah. You can find out about their locations and contact details by visiting the following website: www.islamicfinder.org
                You must also refer to trusted Internet websites which will clarify the facts of Islam for you, such as
              </p>


              <p>
                Religion is undoubtedly the most important thing in our life, and we must therefore do our best to find out about its rulings and teachings and seek answers to questions about matters we do not know from trustworthy, know ledgeable scholars.
              </p>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}

export default preliminar