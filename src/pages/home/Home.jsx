import React from 'react'
import Hero from './hero/Hero'
import Rent from './rent/Rent'
import About from './about/About'

const Home = () => {
  return (
    <React.Fragment>
    <Hero />
    <Rent />
    <About />
    </React.Fragment>
  )
}

export default Home