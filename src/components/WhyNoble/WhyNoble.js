import React, {Component} from 'react'
import './whynoble.css'
import MovingMenu from '../Landing/MovingMenu/MovingMenu';
import Footer from '../Footer/Footer';
import { why_noble } from '../../assets/text/sections'


export default class WhyNoble extends Component {
state = {
    backgroundOpacity: 0
}
componentDidMount() {
    setTimeout(() => {
        this.setState({ backgroundOpacity: 1})
    }, 1000);
}

render() {
        let backgroundStyle = {
            opacity: this.state.backgroundOpacity
        }
        return (
           <div id="contact-wrapper">
            <MovingMenu style={{opacity: 1}}/>
                <section id="whynoble-wrapper">
                    <section id="whynoble-content" style={backgroundStyle}>
                        <div id="whynoble-text">
                            <p id="whynoble-header"> Why Noble </p>
                            <p class="whynoble-body"> {why_noble.text}</p>
                            <br/>
                            <p class="whynoble-body" id="whynoble-call-to-action">
                            You don't have to live with these blemishes! Noble Stone Management is your
                            expert in all things stone! Contact us today for your <em>FREE</em> consultation.</p>
                        </div>
                    </section>
                </section>
            <Footer />
           </div>
        )
    }
}