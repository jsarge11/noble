import React from 'react'
import './slide.css'


export default function Slide(props) {
    return (
       <div id={props.id} className="slide-wrapper">
        <img className="slide-image" src={props.img} alt='' />
       </div>
    )
}