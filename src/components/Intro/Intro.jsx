import React from 'react'
import './intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instragram from '../../img/instagram.png'
import  Vector1 from '../../img/Vector1.png'
import  Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>H! I Am</span>
                <span>Al Amin AshiK</span>
                <span>Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
            </div>

            <button className='button i-button'>Hire Me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instragram} alt="" />
            </div>


        </div>
        <div className="i-right">
            .   <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="" />

                <div style={{top:'-4%', left:'68%'}}>
                    <FloatingDiv image={crown} text1="Web" text2="Developer" />
                </div>
                <div style={{top:'18rem', left:'0rem'}}>
                    <FloatingDiv image={thumbup} text1="Best Design" text2="Award" />
                </div>


                {/* blurdiv */}
                <div className='blur' style={{background:"rgb(238 210 255"}}></div>
                <div className='blur' style={
                    {
                    background:'#C1F5FF',
                    top :'17rem', 
                    width:'21rem',
                    height:'11rem',
                    left:'-9rem'
                        
                    }}></div>
        </div>
     </div>
  )
}

export default Intro