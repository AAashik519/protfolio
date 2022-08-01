import React from 'react'
import  "./services.css"

import HeartEmoji from '../../img/heartemoji.png'
import  glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './ashik.pdf'
const Services = () => {
  return (
    <div  className='services'>
         {/* left side */}
         <div className="awesome">
            <span>My Awesome </span>
            <span>Services </span>
            <span>Lorem ipsum is simpley dummey text of printing of printing lorem <br></br>  ispum is simply dummey text of printing commodi.      </span>

                <a href={Resume} download >
                <button className='button s-button'>Download Cv</button>

                </a>
            <div className="blur s-blur1" style={{background :"ABF1FF94"}}></div>

         </div>
         {/* right side */}
         <div className="cards">
                <div style={{left:'14rem'}}>
                    <Card 
                    emoji={HeartEmoji}
                    heading ={'Design'}
                     detail={"Figma, Sketch, PhotoShop, Adobe Xd"}
                     />
                </div>



                <div style={{ top:'12rem' ,left:'-4rem'}}>
                    <Card 
                    emoji={glasses}
                    heading ={'Developers'}
                     detail={"React,Nodejs, Expressjs,MongoDB"}
                     />
                </div>


                <div style={{ top:'19rem' ,left:'12rem'}}>
                    <Card 
                    emoji={humble}
                    heading ={'Ui / UX'}
                     detail={"Lorem ipsum is simpley dummey"}
                     />
                </div>

                <div className='blur  s-blur2 '  style={{background:"var(--purple)"}}></div>
         </div>

    </div>
  )
}

export default Services