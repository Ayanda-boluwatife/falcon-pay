import React from 'react'
import Advert from '../components/Advert'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Withdrawal from '../components/Withdrawal'
import How from '../components/How'
import Stream from '../components/Stream'
import Help from '../components/Help'
import Integration from '../components/Integration'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <Advert />
        <Integration />
        <Withdrawal />
        <How />
        <Stream />
        <Help />
        <Footer />
    </>
  )
}

export default Home