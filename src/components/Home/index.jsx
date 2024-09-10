import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Sections from './sections'
import Sections2 from './sections2'
import HowTo from './HowTo'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sections />
      <Sections2 />
      <HowTo />
      <Footer />

    </>
  )
}

export default Home