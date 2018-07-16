import React from 'react'
import './movingmenu.css'
import logo from '../../../assets/images/logo.png'
import menuIcon from '../../../assets/images/menu-icon.png'


export default function MovingMenu(props) {
    return (
       <div style={props.style} id="moving-menu-wrapper">
        <img src={logo} height={40} alt="logo" />
        <div id="moving-menu-item-wrapper">
            <p className="moving-menu-item">CONTACT US</p>
            <p className="moving-menu-item">WHY NOBLE</p>
            <p className="moving-menu-item">SERVICES</p>
        </div>
        <img id="menu-icon" src={menuIcon} alt="menu-icon" onClick={() => props.showMenu()}/>
       </div>
    )
}