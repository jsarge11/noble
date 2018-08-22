import React, {Component} from 'react'
import './contact.css'
import MovingMenu from '../Landing/MovingMenu/MovingMenu';
import Footer from '../Footer/Footer';
import side from '../../assets/images/side-granite.jpg'


export default class Contact extends Component {
state = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false
}
componentDidMount() {
    this.showLetters(1);
}
showLetters(i) {
    setTimeout(() => {
        this.setState({ [`${i}`] : true})
        if (i < 9) {
            this.showLetters(++i);
        }
    }, 200)

}
render() {
    let percent = this.state[`${9}` ? 40 : 45];

        return (
           <div id="contact-wrapper">
            <MovingMenu style={{opacity: 1}}/>
                <section id="contact-filler"></section>
                <section id="contact-body">
                    <div id="contact-left">
                        <p className="contact-greeting" style={{opacity: this.state[`${1}`] ? 1 : 0}}>We</p>
                        <p className="contact-greeting" style={{opacity: this.state[`${2}`] ? 1 : 0}}>Would</p>
                        <p className="contact-greeting" style={{opacity: this.state[`${3}`] ? 1 : 0}}>Love</p>
                        <p className="contact-greeting" style={{opacity: this.state[`${4}`] ? 1 : 0}}>To</p>
                        <p className="contact-greeting" style={{opacity: this.state[`${5}`] ? 1 : 0}}>Hear</p>
                        <p className="contact-greeting" style={{opacity: this.state[`${6}`] ? 1 : 0}}>From</p>
                        <p className="contact-greeting" style={{opacity: this.state[`${7}`] ? 1 : 0}}>You</p>
                    </div>
                    <div id="contact-middle">

                    </div>
                    <div id="contact-right"
                         style={{ marginLeft: percent }}>
                        <img    id="contact-right-img"
                                src={side}
                                alt="granite-counter"
                                height="100%"
                                style={{opacity: this.state[`${9}`] ? 1 : 1}}

                        />
                    </div>
                </section>
            <Footer />
           </div>
        )
    }
}