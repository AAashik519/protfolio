import React from 'react'
import  "./services.css"

import HeartEmoji from '../../img/heartemoji.png'
import  glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../Card/Card'
const Services = () => {
  return (
    <div  className='services'>
         {/* left side */}
         <div className="awesome">
            <span>My Awesome </span>
            <span>Services </span>
            <span>Lorem ipsum is simpley dummey text of printing of printing lorem <br></br>  ispum is simply dummey text of printing commodi.      </span>

            <button className='button s-button'>Download Cv</button>
            <div className="blur s-blur1" style={{background :"ABF1FF94"}}></div>

         </div>
         {/* right side */}
         <div className="cards">
                <div>
                    <Card 
                    emoji={HeartEmoji}
                    heading ={'Design'}
                     detail={"Figma, Sketch, PhotoShop, Adobe"}
                     />
                </div>
         </div>

    </div>
  )
}

export default Services