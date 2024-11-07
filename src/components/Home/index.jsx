import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Sections from './sections'
import Sections2 from './sections2'
import HowTo from './HowTo'
import Footer from './Footer';
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import { useMenu } from '@/contexts/MenuContext'

const Home = ({ dataAllCategories, dataPreliminaries, dataAllLangs }) => {
  const { locale } = useRouter();
  const router = useRouter();
  const { menulang, setMenuLang, searchMenu, setSearchMenu } = useMenu();

  const getPTagContent2 = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const contentElements = doc.querySelectorAll('p, li');
    // Map over NodeList of <p> and <ul> elements to extract their innerHTML
    return Array.from(contentElements).map((element) => {
      const tagName = element.tagName.toLowerCase();
      return `<${tagName}>${element.innerHTML}</${tagName}>`;
    }).join('');
  };

  return (
    <>
      <Navbar dataAllLangs={dataAllLangs} />
      <Hero />
      <Sections dataPreliminaries={dataPreliminaries} />
      <Sections2 dataAllCategories={dataAllCategories} />
      <HowTo />
      <Footer dataAllLangs={dataAllLangs} dataAllCategories={dataAllCategories} />




      {menulang &&
        <div className={styles.layer} onClick={() => setMenuLang(false)} />
      }
      <div className="container">

        {/* <div className={"Hollaaaa"} dangerouslySetInnerHTML={{ __html: getPTagContent2(data) }} dir={'rtl'}></div> */}
      </div>


    </>
  )
}

export default Home