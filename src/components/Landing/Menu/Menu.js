import React from 'react'
import './menu.css'
import { toCapital } from '../../../fns/functions'

export default function Menu(props) {
    return (
       <div style={props.style} id="menu-wrapper">
            <a href="/#/contact"><span className="menu-item"> {toCapital('Contact Us')} </span></a>
            <a href="/#/whynoble"><span className="menu-item"> {toCapital('Why Noble')} </span></a>
       </div>
    )
}