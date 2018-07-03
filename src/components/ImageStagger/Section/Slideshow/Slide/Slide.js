import React from 'react'
import './slide.css'


export default function Slide(props) {
    return (
       <div className={`${props.imgClass} slide-wrapper`}>
        <img className="slide-image" src={require(`../../../../../assets/images/${props.img}`)} alt='' />
       </div>
    )
}