import React from 'react'
import './Hero.scss'
import '../../normalize/Normalize.scss'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="container">
        <div className="hero__wrapper">
          <input type="text" placeholder='pickup' />
          <input type="text" placeholder='drop' />
          <button>Search for cabs</button>
        </div>
      </div>
    </div>
  )
}

export default Hero