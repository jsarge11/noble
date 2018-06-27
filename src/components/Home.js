import React, {Component} from 'react'
import './home.css'
import LandingImage from './LandingImage/LandingImage';


export default class Home extends Component {
render() {
        return (
           <div id="home-wrapper">
            <LandingImage />
           </div>
        )
    }
}