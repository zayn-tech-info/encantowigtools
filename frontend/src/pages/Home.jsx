import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Herosection from '../components/Herosection.jsx'
import ProductSection from '../components/ProductSection.jsx'
import FeaturesSection from '../components/FeaturesSection.jsx'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <ProductSection />
      <FeaturesSection />
    </div>
  )
}

export default Home