import React from 'react'
import '../../normalize/Normalize.scss'
import './Rent.scss'
import rent1 from '../../../assets/img/rent1.png'
import rent2 from '../../../assets/img/rent2.png'
import rent3 from '../../../assets/img/rent3.png'

const Rent = () => {
  return (
    <div className='rent'>
        <div className="container">
            <div className="rent__wrapper">
                <h2>Rent our eco-friendly electric scooters</h2>
                <div className="rent__cards">
                    <div className="rent__card">
                        <img src={rent1} alt="" />
                        <h2>Safely Model X1 Green</h2>
                        <p>150/hour</p>
                        <button>rent now</button>
                    </div>
                    <div className="rent__card">
                        <img src={rent2} alt="" />
                        <h2>Safely Model X1 Ash</h2>
                        <p>150/hour</p>
                        <button>rent now</button>
                    </div>
                    <div className="rent__card">
                        <img src={rent3} alt="" />
                        <h2>Safely Model X1 Blue</h2>
                        <p>150/hour</p>
                        <button>rent now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rent