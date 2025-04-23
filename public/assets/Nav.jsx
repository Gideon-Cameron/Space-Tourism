import React from 'react'
import Logo from './images/logo.svg';
import Burger from './images/icon-hamburger.svg'
// import { Link } from 'react-router-dom'
function Nav() {
  return (
    <header>
        <nav className='nav'>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <ul>
                <li><a href="../sections/Home.jsx">00 Home</a></li>
                <li><a href="../sections/Description.jsx">01 Destination</a></li>
                <li><a href="../sections/Crew.jsx">02 Crew</a></li>
                <li><a href="../sections/Technology.jsx">03 Technology</a></li>
            </ul>
            <div className="burger">
                <img src={Burger} alt="" />
            </div>
        </nav>
    </header>
  )
}

export default Nav
