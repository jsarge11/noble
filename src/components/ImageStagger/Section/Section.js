import React from 'react'
import Slideshow from './Slideshow/Slideshow'
import './section.css'


export default function Section(props) {
    let imageId = props.imageFadeIn ? 'image-visible' : 'image-hidden'
    let textId = props.textFadeIn ? 'text-visible' : 'text-hidden'
    let textClassName = props.reverse ? 'section-text-reverse' : 'section-text';
    let imgClassName = props.reverse ? 'slideshow-wrapper-reverse' : 'slideshow-wrapper';

    return (
       <div className='section-wrapper'>
        <Slideshow id={imageId} className={imgClassName} img1={props.img1} img2={props.img2} img3={props.img3} />
        <div id={textId} className={textClassName}>
            <h1>{props.header}</h1>
            <p>{props.text}</p>
        </div>
       </div>
    )
}