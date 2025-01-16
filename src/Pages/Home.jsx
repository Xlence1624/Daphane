import React from 'react'
import Hero from '../Components/Hero'
import LatestCollections from '../Components/LatestCollections'
import BestSeller from '../Components/BestSeller'
import OurPolicies from '../Components/OurPolicies'
import NewLetterBox from '../Components/NewLetterBox'


const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollections/>
      <BestSeller/>
      <OurPolicies/>
      <NewLetterBox/>
    </div>
  )
}

export default Home
