import React, { Component } from 'react'
import './landing.css'
import LandingImage from './LandingImage/LandingImage'
import logo from '../../assets/images/logo.png'
import { front_page } from '../../assets/text/sections'


export default class Landing extends Component {
    state = {
        opacity: 0,
        landingImageOpacity: 0
    }
    componentDidMount() {
        setTimeout(() => this.startLoadIn(), 1000)
    }
    startLoadIn = () => {
        this.setState({ landingImageOpacity: 1 }, () => {
            setTimeout(() => this.setState({ landingImageOpacity: .5 }, () => {
                setTimeout(()=>this.setState({ opacity: 1}), 700);
            }), 1000);
        });


    }
    render() {
        let landingStyles = {
            opacity: this.state.opacity,
        }
        let landingImageStyles = {
            opacity: this.state.landingImageOpacity,
        }

        return (
       <div id="landing-wrapper">
        <LandingImage style={landingImageStyles} />
        <div style={landingStyles} id="landing-text" >
            <img src={logo} height={100} alt="noble-stone" />
            <br/>
            <br/>
            {front_page.text}
        </div>
       </div>
    )}
}