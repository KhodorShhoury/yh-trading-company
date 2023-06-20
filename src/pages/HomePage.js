import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutUs from '../components/Home/AboutUs'
import Features from '../components/Home/Features'
import HomeCategories from '../components/Home/HomeCategories'
import HomeProducts from '../components/Home/HomeProducts'
import ContactUs from '../components/Home/ContactUs'
import Footer from '../components/utils/Footer'

function HomePage() {
  return (
    <>
          <HeroSection />
          <AboutUs />
          <Features />
          <HomeCategories />
          <HomeProducts />
          <ContactUs />
    </>
  )
}

export default HomePage