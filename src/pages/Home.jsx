import React from 'react'
import BrandIdentity from '../components/BrandIdentity'
import BestSellers from '../components/BestSellers'
import StoreCategories from '../components/StoreCategories'
import AboutUs from '../components/AboutUs'

const Home = () => {
  return (
    <div>
      <BrandIdentity />
      <BestSellers />
      <StoreCategories />
      <AboutUs />
    </div>
  )
}

export default Home
