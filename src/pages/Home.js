import {React, useState, useEffect} from 'react'
import Advert from '../components/Advert'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Withdrawal from '../components/Withdrawal'
import How from '../components/How'
import Stream from '../components/Stream'
import Help from '../components/Help'
import Integration from '../components/Integration'
import Footer from '../components/Footer'
import Loading from './Loading'
const Home = () => {

  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
      setTimeout(() => {
        setLoading(false)
      }, 4000);
  }, [])
  return (
    <>
    {isLoading? (<Loading/>) : (
       <div>
         <Header />
        <Hero />
        <Advert />
        <Integration />
        <Withdrawal />
        <How />
        <Stream />
        <Help />
        <Footer />
       </div>

        )}
    </>
  )
}

export default Home