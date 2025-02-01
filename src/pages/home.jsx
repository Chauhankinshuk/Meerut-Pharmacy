import React from 'react'
import Hero from '../components/hero'
import LatestCollection from '../components/latestCollection'
import BestSeller from '../components/bestSeller'
import OurPolicy from '../components/ourpolicy'
import Offer from '../components/offer';
const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <LatestCollection></LatestCollection>
        <BestSeller></BestSeller>
         <Offer></Offer>
        <OurPolicy></OurPolicy>

    </div>
  )
}
export default Home

