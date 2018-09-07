import React from 'react'
import './movingmenu.css'
import logo from '../../../assets/images/logo.png'
import menuIcon from '../../../assets/images/menu-icon.png'
import { Link } from 'react-router-dom'


export default function MovingMenu(props) {
    return (
       <div style={props.style} id="moving-menu-wrapper">
        <Link to="/"><img src={logo} height={40} alt="logo" /> </Link>
        <div id="moving-menu-item-wrapper">
            <p className="moving-menu-item"> <a href="/#/contact">CONTACT</a></p>
            <p className="moving-menu-item">WHY NOBLE</p>
            <p className="moving-menu-item">SERVICES</p>
        </div>
        <img id="menu-icon" src={menuIcon} alt="menu-icon" onClick={() => props.showMenu()}/>
       </div>
    )
}