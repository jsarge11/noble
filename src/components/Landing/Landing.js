import React, { Component } from 'react'
import './landing.css'
import LandingImage from './LandingImage/LandingImage'
import logo from '../../assets/images/logo.png'
import { front_page } from '../../assets/text/sections'
import Menu from './Menu/Menu';


export default class Landing extends Component {
    state = {
        opacity: 0,
        landingImageOpacity: 0,
        bottom: -50
    }
    componentDidMount() {
        setTimeout(() => this.startLoadIn(), 1000)
    }
    startLoadIn = () => {
        this.setState({ landingImageOpacity: 1 }, () => {
            setTimeout(() => this.setState({ landingImageOpacity: .5 }, () => {
                setTimeout(()=>this.setState({ opacity: 1, bottom: 50 }), 700);
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
        let menuStyle = {
            bottom: this.state.bottom,
            opacity: this.state.opacity
        }

        return (
       <div id="landing-wrapper">
        <LandingImage style={landingImageStyles} />
        <div style={landingStyles} id="landing-text" >
            <img src={logo} alt="noble-stone" />
            <br/>
            <br/>
            {front_page.text}
        </div>
        <Menu style={menuStyle}/>
       </div>
    )}
}