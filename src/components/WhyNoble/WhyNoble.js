import React, {Component} from 'react'
import './whynoble.css'
import MovingMenu from '../Landing/MovingMenu/MovingMenu';
import Footer from '../Footer/Footer';
import { why_noble } from '../../assets/text/sections'


export default class WhyNoble extends Component {
state = {
    backgroundOpacity: 0,
    menuVisible: false
}
componentDidMount() {
    setTimeout(() => {
        this.setState({ backgroundOpacity: 1})
    }, 1000);
}
showMenu = () => {
    let { menuVisible } = this.state;
    if (!menuVisible) {
        document.getElementById("moving-menu-item-wrapper").style.height = "160px";
        this.setState({ menuVisible: !menuVisible})
    }
    else {
        document.getElementById("moving-menu-item-wrapper").style.height = "0px";
        this.setState({ menuVisible: !menuVisible})
    }
}

render() {
        let backgroundStyle = {
            opacity: this.state.backgroundOpacity
        }
        return (
           <div id="contact-wrapper">
            <MovingMenu style={{opacity: 1}} showMenu={this.showMenu} />
                <section id="whynoble-wrapper">
                    <section id="whynoble-content" style={backgroundStyle}>
                        <div id="whynoble-text">
                            <p id="whynoble-header"> Why Noble </p>
                            <p className="whynoble-body"> {why_noble.text}</p>
                            <br/>
                            <p className="whynoble-body" id="whynoble-call-to-action">
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