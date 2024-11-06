import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Sections from './sections'
import Sections2 from './sections2'
import HowTo from './HowTo'
import Footer from './Footer'

const Home = ({ dataAllCategories, dataPreliminaries, dataAllLangs }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sections dataPreliminaries={dataPreliminaries} />
      <Sections2 dataAllCategories={dataAllCategories} />
      <HowTo />
      <Footer dataAllLangs={dataAllLangs} dataAllCategories={dataAllCategories} />

    </>
  )
}

export default Home