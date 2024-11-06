import React from 'react'
import styles from './index.module.scss'

const data = [{ title: 'Your Financial Transactions', img: '/assets/imgs/sections/1.png' }, { title: 'Your Food and Drink', img: '/assets/imgs/sections/2.png' }, { title: 'YOUR DRESS CODE', img: '/assets/imgs/sections/3.png' }, { title: 'YOUR FAMILY', img: '/assets/imgs/sections/4.png' }, { title: 'YOUR MORAL CHARACTER', img: '/assets/imgs/sections/5.png' }, { title: 'YOUR NEW LIFE', img: '/assets/imgs/sections/6.png' }]


const Sections2 = ({ dataAllCategories }) => {

  console.log(dataAllCategories, "")
  return (
    <section id='sections2' className={styles.sections2}>
      <div className="container">
        <div className={styles.boxes_container}>
          {dataAllCategories.map((box, idx) =>
            <div className={styles.box} key={idx}>
              <div className={styles.img_container}>
                <img src={box.cover} alt="" />
              </div>

              <div className={styles.title}>
                <h4>{box.name}</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Sections2