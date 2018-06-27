import React from 'react'
import './imagestagger.css'
import img1 from '../../assets/images/IMG_0076.JPG'
import img2 from '../../assets/images/IMG_0120.JPG'
import img3 from '../../assets/images/IMG_0082.JPG'
import { section_one } from '../../assets/text/sections'
import Section from './Section/Section';


export default function ImageStagger(props) {
    let { header, text } = section_one;
    return (
       <div id="stagger-wrapper">
        <Section header={header} text={text} img={img1} reverse={false}/>
        <Section header={header} text={text} img={img2} reverse={true}/>
        <Section header={header} text={text} img={img3} reverse={false}/>
       </div>
    )
}