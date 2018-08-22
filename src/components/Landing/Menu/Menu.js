import React from 'react'
import './menu.css'
import { toCapital } from '../../../fns/functions'
import { Link } from 'react-router-dom'

export default function Menu(props) {
    return (
       <div style={props.style} id="menu-wrapper">
            <Link to="/contact"><span className="menu-item"> {toCapital('Contact Us')} </span></Link>
            <span className="menu-item"> {toCapital('Why Noble')} </span>
            <span className="menu-item"> {toCapital('Services')} </span>
       </div>
    )
}