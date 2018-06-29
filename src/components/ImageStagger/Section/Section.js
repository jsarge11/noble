import React from 'react'
import './section.css'


export default function Section(props) {
    let imageId = props.imageFadeIn ? 'image-visible' : 'image-hidden'
    let textId = props.textFadeIn ? 'text-visible' : 'text-hidden'
    let className = props.reverse ? 'section-wrapper-reverse' : 'section-wrapper';
    return (
       <div className={className}>
        <img id={imageId} src={props.img} height={700} alt='section-img' />
        <div id={textId} className="section-text">
            <h1>{props.header}</h1>
            <p>{props.text}</p>
        </div>
       </div>
    )
}