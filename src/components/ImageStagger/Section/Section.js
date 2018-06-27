import React from 'react'
import './section.css'


export default function Section(props) {
    console.log(props.reverse)
    let className = props.reverse ? 'section-wrapper-reverse' : 'section-wrapper';
    return (
       <div className={className}>
        <img src={props.img} height={700} alt='section-img' />
        <div className="section-text">
            <h1>{props.header}</h1>
            <p>{props.text}</p>
        </div>
       </div>
    )
}