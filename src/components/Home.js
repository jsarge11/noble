import React, {Component} from 'react'
import './home.css'
import ImageStagger from './ImageStagger/ImageStagger';
import CallToAction from './CallToAction/CallToAction';
import Footer from './Footer/Footer';
import Landing from './Landing/Landing';


export default class Home extends Component {
render() {
        return (
           <div id="home-wrapper">
            <Landing />
            <ImageStagger />
            <CallToAction />
            <hr />
            <Footer />
           </div>
        )
    }
}