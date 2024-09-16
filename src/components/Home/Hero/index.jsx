import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import {
  motion

} from 'framer-motion';
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
          {/* <div className={styles.img_container}>
            <img className={`${styles.img_1} ${isImg_1Active && styles.active}`} src="/assets/svgs/img_1.svg" alt="" />
            <img className={`${styles.img_2} ${isImg_2Active && styles.active}`} src="/assets/svgs/img_2.svg" alt="" />




          </div> */}




          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            dir="ltr"
            modules={[Navigation, FreeMode]}
            initialSlide={1}
            className={styles.swiper_contain}
            centeredSlides={true}
            style={{ width: '100%' }}
            navigation={{
              prevEl: '.left_arrow',
              nextEl: '.right_arrow',
            }}
          >
            <SwiperSlide  >
              <div


                className={styles.img_container}

              >
                <motion.img initial={{ opacity: 0, scale: (1.5), x: 0 }}
                  whileInView={{ opacity: 1, scale: (1.5), x: 20 }}
                  className={`${styles.img_1} `} src="/assets/svgs/img_1.svg" alt="" />
                <motion.img
                  initial={{ opacity: 0, x: 0, scale: (1.2), }}
                  whileInView={{ opacity: 1, x: -30, scale: (1.2), }}

                  className={`${styles.img_2} `} src="/assets/svgs/img_2.svg" alt="" />
              </div>

            </SwiperSlide>
            <SwiperSlide  >
              <div


                className={styles.img_container}

              >
                <motion.img initial={{ opacity: 0, scale: 1.1, x: 0 }}
                  whileInView={{ opacity: 1, scale: 1.1, x: 20 }}
                  className={`${styles.img_3} `} src="/assets/imgs/img_3.png" alt="" />
                <motion.img
                  initial={{ opacity: 0, scale: 0.9, x: 0, }}
                  whileInView={{ opacity: 1, scale: 0.9, x: -20, }}
                  className={`${styles.img_4} `} src="/assets/imgs/img_4.png" alt="" />
              </div>

            </SwiperSlide>
            <SwiperSlide  >
              <div


                className={styles.img_container}

              >
                <motion.img initial={{ opacity: 0, scale: (1.5), x: 0 }}
                  whileInView={{ opacity: 1, scale: (1.5), x: 20 }}
                  className={`${styles.img_1} `} src="/assets/svgs/img_1.svg" alt="" />
                <motion.img
                  initial={{ opacity: 0, x: 0, scale: (1.2), }}
                  whileInView={{ opacity: 1, x: -30, scale: (1.2), }}

                  className={`${styles.img_2} `} src="/assets/svgs/img_2.svg" alt="" />
              </div>

            </SwiperSlide>
            <SwiperSlide  >
              <div


                className={styles.img_container}

              >
                <motion.img initial={{ opacity: 0, scale: (1.5), x: 0 }}
                  whileInView={{ opacity: 1, scale: (1.5), x: 20 }}
                  className={`${styles.img_1} `} src="/assets/svgs/img_1.svg" alt="" />
                <motion.img
                  initial={{ opacity: 0, x: 0, scale: (1.2), }}
                  whileInView={{ opacity: 1, x: -30, scale: (1.2), }}

                  className={`${styles.img_2} `} src="/assets/svgs/img_2.svg" alt="" />
              </div>

            </SwiperSlide>
            <SwiperSlide  >
              <div


                className={styles.img_container}

              >
                <motion.img initial={{ opacity: 0, scale: (1.5), x: 0 }}
                  whileInView={{ opacity: 1, scale: (1.5), x: 20 }}
                  className={`${styles.img_1} `} src="/assets/svgs/img_1.svg" alt="" />
                <motion.img
                  initial={{ opacity: 0, x: 0, scale: (1.2), }}
                  whileInView={{ opacity: 1, x: -30, scale: (1.2), }}

                  className={`${styles.img_2} `} src="/assets/svgs/img_2.svg" alt="" />
              </div>

            </SwiperSlide>


          </Swiper>



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

              <div className={styles.img_container2}>
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