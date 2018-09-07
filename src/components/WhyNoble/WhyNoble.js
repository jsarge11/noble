import React, {Component} from 'react'
import './whynoble.css'
import MovingMenu from '../Landing/MovingMenu/MovingMenu';
import Footer from '../Footer/Footer';


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
                        <div>
                            <p id="whynoble-header"> Why Noble </p>
                        </div>
                    </section>
                </section>
            <Footer />
           </div>
        )
    }
}