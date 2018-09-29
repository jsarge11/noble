import React, { Component } from 'react'
import './movingmenu.css'
import logo from '../../../assets/images/logo.png'
import menuIcon from '../../../assets/images/menu-icon.png'
import { Link } from 'react-router-dom'
import ServiceAreas from '../ServiceAreas/ServiceAreas'
import { serviceAreaToRight, serviceAreaToLeft } from '../../../fns/functions'


export default class MovingMenu extends Component {
    state = {
        serviceAreaRight: "-100%"
    }
    render() {
        return (
            <div style={this.props.style} id="moving-menu-wrapper">
            <Link to="/"><img src={logo} height={40} alt="logo" /> </Link>
            <div id="moving-menu-item-wrapper">
                <p className="moving-menu-item"> <a href="/#/contact">CONTACT</a></p>
                <p className="moving-menu-item"> <a href="/#/whynoble">WHY NOBLE</a></p>
                <p className="moving-menu-item"
                   onMouseEnter={() => serviceAreaToLeft.call(this)}
                   onMouseLeave={() => serviceAreaToRight.call(this)}
                >
                    SERVICE AREAS
                </p>
                <ServiceAreas right={this.state.serviceAreaRight}/>

            </div>
            <img id="menu-icon" src={menuIcon} alt="menu-icon" onClick={() => this.props.showMenu()}/>
            </div>
        )

    }
}