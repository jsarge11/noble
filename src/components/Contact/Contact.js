import React, {Component} from 'react'
import './contact.css'
import MovingMenu from '../Landing/MovingMenu/MovingMenu';
import Footer from '../Footer/Footer';
import side from '../../assets/images/logo-text.png'


export default class Contact extends Component {
state = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    menuVisible: false
}
componentDidMount() {
    this.showLetters(1);
}
showLetters(i) {
    setTimeout(() => {
        this.setState({ [`${i}`] : true})
        if (i < 10) {
            this.showLetters(++i);
        }
    }, 200)

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
    let percent = this.state[`${9}` ? 40 : 45];

        return (
           <div id="contact-wrapper">
            <MovingMenu style={{opacity: 1}} showMenu={this.showMenu}/>
                <section id="contact-filler"></section>
                <section id="contact-body">
                    <div id="contact-left">
                        <p className="contact-greeting" style={{opacity: this.state[`${1}`] ? 1 : 0}}>We</p>
                        <p className="contact-greeting" style={{opacity: this.state[`${2}`] ? 1 : 0}}>Would</p>
                        <p className="contact-greeting" style={{opacity: this.state[`${3}`] ? 1 : 0}}>Love</p>
                        <p className="contact-greeting" style={{opacity: this.state[`${4}`] ? 1 : 0}}>To</p>
                        <p className="contact-greeting" style={{opacity: this.state[`${5}`] ? 1 : 0}}>Hear</p>
                        <p className="contact-greeting" style={{opacity: this.state[`${6}`] ? 1 : 0}}>From</p>
                        <p className="contact-greeting" style={{opacity: this.state[`${7}`] ? 1 : 0}}>You!</p>
                    </div>
                    <div id="contact-middle" style={{opacity: this.state[`${10}`] ? 1 : 0}}>

                        Questions? Comments? <br/> Free consultation?  <br/> <br/>
                        Don't hesitate to contact about all your stone restoration questions! <br/>

                        Follow us on Instagram @noble_stone_management! <br/><br/>

                        Use the below form, <br/>or call us today! <br/><br/>

                        -Louie Noble<br/>
                        (801)-935-1273<br/>

                    </div>
                    <div id="contact-right"
                         style={{ marginLeft: percent }}>
                        <img    id="contact-right-img"
                                src={side}
                                alt="granite-counter"
                                height="20%"
                                style={{opacity: this.state[`${9}`] ? 1 : 0}}

                        />
                    </div>
                </section>
            <Footer />
           </div>
        )
    }
}