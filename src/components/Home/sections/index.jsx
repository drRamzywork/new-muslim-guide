import React, { useRef, useState } from 'react'
import styles from './index.module.scss';
import { IoIosArrowForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';

const data = [
  { title: "your faith", desc: "All divine messages, which the prophets brought to their people, called to the worship of Allah alone without associating anyone in worship with Him and to reject all false deities. In fact, this is the exact meaning of the testimony of faith through which one enters the fold of Islam by pronouncing it.", icon: '/assets/svgs/sun.svg' },

  { title: 'your Purification', desc: 'All divine messages, which the prophets brought to their people, called to the worship of Allah alone without associating anyone in worship with Him and to reject all false deities. In fact, this is the exact meaning of the testimony of faith through which one enters the fold of Islam by pronouncing it.', icon: '/assets/svgs/water.svg' },
  { title: "your faith", desc: "All divine messages, which the prophets brought to their people, called to the worship of Allah alone without associating anyone in worship with Him and to reject all false deities. In fact, this is the exact meaning of the testimony of faith through which one enters the fold of Islam by pronouncing it.", icon: '/assets/svgs/sun.svg' },

  { title: 'your Purification', desc: 'All divine messages, which the prophets brought to their people, called to the worship of Allah alone without associating anyone in worship with Him and to reject all false deities. In fact, this is the exact meaning of the testimony of faith through which one enters the fold of Islam by pronouncing it.', icon: '/assets/svgs/water.svg' },
  { title: "your faith", desc: "All divine messages, which the prophets brought to their people, called to the worship of Allah alone without associating anyone in worship with Him and to reject all false deities. In fact, this is the exact meaning of the testimony of faith through which one enters the fold of Islam by pronouncing it.", icon: '/assets/svgs/sun.svg' },

  { title: 'your Purification', desc: 'All divine messages, which the prophets brought to their people, called to the worship of Allah alone without associating anyone in worship with Him and to reject all false deities. In fact, this is the exact meaning of the testimony of faith through which one enters the fold of Islam by pronouncing it.', icon: '/assets/svgs/water.svg' },
  { title: "your faith", desc: "All divine messages, which the prophets brought to their people, called to the worship of Allah alone without associating anyone in worship with Him and to reject all false deities. In fact, this is the exact meaning of the testimony of faith through which one enters the fold of Islam by pronouncing it.", icon: '/assets/svgs/sun.svg' },

  { title: 'your Purification', desc: 'All divine messages, which the prophets brought to their people, called to the worship of Allah alone without associating anyone in worship with Him and to reject all false deities. In fact, this is the exact meaning of the testimony of faith through which one enters the fold of Islam by pronouncing it.', icon: '/assets/svgs/water.svg' },
  { title: "your faith", desc: "All divine messages, which the prophets brought to their people, called to the worship of Allah alone without associating anyone in worship with Him and to reject all false deities. In fact, this is the exact meaning of the testimony of faith through which one enters the fold of Islam by pronouncing it.", icon: '/assets/svgs/sun.svg' },

  { title: 'your Purification', desc: 'All divine messages, which the prophets brought to their people, called to the worship of Allah alone without associating anyone in worship with Him and to reject all false deities. In fact, this is the exact meaning of the testimony of faith through which one enters the fold of Islam by pronouncing it.', icon: '/assets/svgs/water.svg' },
]

const breakpoints = {
  320: {
    slidesPerView: 1.8,
  },
  380: {
    slidesPerView: 1.8,
  },
  640: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 3,
  },
  1366: {
    slidesPerView: 3,
  },
  1920: {
    slidesPerView: 3,
  },
};

const Sections = ({ dataPreliminaries, dataAllWords }) => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleSlideClick = (index) => {
    swiperRef?.current?.slideTo(index);
    setActiveSlide(index);
  };



  return (
    <>
      <section id='sections' className={styles.sections}>
        <div className={styles.sec_container}>
          <div className={styles.swiper_container}>
            <Swiper
              spaceBetween={10}
              // slidesPerView={3}
              pagination={{ clickable: true }}
              dir="ltr"
              modules={[Navigation, FreeMode]}
              initialSlide={1}
              onSwiper={(swiper) => swiperRef.current = swiper}
              onSlideChange={handleSlideChange}
              className={styles.swiper_contain}
              centeredSlides={true}
              breakpoints={breakpoints}

              navigation={{
                prevEl: '.left_arrow',
                nextEl: '.right_arrow',
              }}
            >
              {dataPreliminaries?.posts?.map((box, index) => (
                <SwiperSlide key={index} >
                  <div onClick={() => handleSlideClick(index)} className={`${styles.box} ${activeSlide === index ? styles.active : ''}`}>
                    <img src={box.icon} alt="" />
                    <p>{box.title}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>



          </div>

          <div className="container">
            <div className={styles.active_swiper_container}>

              <div className={styles.active_swiper}>
                <div className={styles.header}>
                  <div className={styles.img_container}>
                    <img src={dataPreliminaries?.posts[activeSlide]?.image} alt="" />

                    <div
                      className={styles.background_image}>

                      <img
                        src={dataPreliminaries?.posts[activeSlide]?.image}
                        alt="Background"
                      />
                    </div>

                  </div>
                  <div className={styles.title}>
                    <div className={styles.num}>

                      <span>
                        {activeSlide + 1}
                      </span>

                    </div>
                    <h3>{dataPreliminaries?.posts[activeSlide]?.title}</h3>
                  </div>
                </div>

                <div className={styles.desc}>
                  {/* <p>All divine messages, which the prophets brought to their people, called to the worship of Allah alone without associating anyone in worship with Him and to reject all false deities. In fact, this is the exact meaning of the testimony of faith through which one enters the fold of Islam by pronouncing it.</p> */}

                  <p>{dataPreliminaries?.posts[activeSlide]?.description}</p>

                </div>

                <div className={styles.btn}>
                  <p>{dataAllWords?.read_more}</p>
                  <IoIosArrowForward />
                </div>


              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Sections