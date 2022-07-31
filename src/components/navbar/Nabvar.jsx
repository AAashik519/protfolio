import React from 'react'
import './navbar.css'
const Nabvar = () => {
  return (
    <div className='n-wrapper'> 
        <div className="n-left">
            <div className="n-name">Al_Ashik</div>
            <span>Toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Experience</li>
                    <li>Protfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
                <button className='button n-button'> Contact </button>
        </div>
    </div>
  )
}

export default Nabvar