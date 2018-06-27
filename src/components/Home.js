import React, {Component} from 'react'
import './home.css'
import LandingImage from './LandingImage/LandingImage';
import ImageStagger from './ImageStagger/ImageStagger';
import CallToAction from './CallToAction/CallToAction';


export default class Home extends Component {
render() {
        return (
           <div id="home-wrapper">
            <LandingImage />
            <ImageStagger />
            <CallToAction />
           </div>
        )
    }
}