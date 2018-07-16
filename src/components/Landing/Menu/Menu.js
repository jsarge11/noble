import React from 'react'
import './menu.css'
import { toCapital } from '../../../fns/functions'

export default function Menu(props) {
    return (
       <div style={props.style} id="menu-wrapper">
            <span className="menu-item"> {toCapital('Contact Us')} </span>
            <span className="menu-item"> {toCapital('Why Noble')} </span>
            <span className="menu-item"> {toCapital('Services')} </span>
       </div>
    )
}