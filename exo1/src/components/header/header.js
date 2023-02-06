import React from 'react'
import Img from './public/img/image-equilibrium.jpg'
import "./public/css/app.css";
import Eth from './public/img/icon-ethereum.svg'
import Clock from './public/img/icon-clock.svg'
import Bot from './public/img/image-avatar.png'
import View from './public/img/icon-view.svg'
const Header = ()=>{
    return(
        <div className='cards-header'>
            <img src={Img} alt="" width={350} style={{borderRadius:"15px"}}/>
            <img src={View} alt="" className='view-icon'/>
            <div>
                <h2>Equilibrium</h2>
                <p>Our Equilibrium collection promotes balances and calm</p>
                <div className='info-crypt'>
                    <p style={{color: "aqua"}}><img src={Eth} alt="" /> 0.041 ETH</p>
                    <p><img src={Clock} alt="" /> 3 days left</p>
                </div>
                <hr />
                <p><img src={Bot} alt="" width={50} style={{border: "1px solid white", borderRadius: "50%"}} /> Creation of <span className='Jules'>Jules Richards</span></p>
            </div>
        </div>
    )
}
export default Header;