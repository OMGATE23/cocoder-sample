import React from 'react'
import Hero from '../../components/hero'
import AboutUs from '../../components/aboutus'
import Content from '../../components/content'
import Slider from '../../components/swiper'

const Home = () => {
  return (
    <div className='bg-fadedPrimaryColor '>
      <Hero/>
      <AboutUs/>
      <Content/>
      <Slider/>
    </div>
  )
}

export default Home