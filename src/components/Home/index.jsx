import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Sections from './sections'
import Sections2 from './sections2'
import HowTo from './HowTo'
import Footer from './Footer';

const Home = ({ dataAllCategories, dataPreliminaries, dataAllLangs, dataAllSettings, dataAllWords }) => {

  const dir = dataAllSettings?.dir;

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
      <Navbar dataAllLangs={dataAllLangs} dataAllSettings={dataAllSettings} dir={dir} />
      <Hero dataAllSettings={dataAllSettings} dataAllCategories={dataAllCategories} />
      <Sections dataPreliminaries={dataPreliminaries} dataAllSettings={dataAllSettings} dataAllWords={dataAllWords} />
      <Sections2 dataAllCategories={dataAllCategories} dataAllSettings={dataAllSettings} />
      <HowTo dataAllSettings={dataAllSettings} />
      <Footer dataAllLangs={dataAllLangs} dataAllCategories={dataAllCategories} dataAllSettings={dataAllSettings} dir={dir} />



    </>
  )
}

export default Home