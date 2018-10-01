import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import axios from 'axios'
import './footer.css'


export default class Footer extends Component {
    state = {
        messageSent: false
    }

    handleInput = (field, e) => {
        this.setState({ [`${field}`]: e.target.value })
    }

    sendMessage = () => {
        let { name, email, message } = this.state;
        console.log('post');
        axios.post('http://sargentassociates.com:8000/email', {name: name, email: email, message: message}).then(() => {
            this.setState({ messageSent: true })
        })
    }
    render() {
        return (
            <footer className="footer-distributed">

            <div className="footer-left">

        <img src={logo} height="50px" alt="logo" />



        <p className="footer-company-name">
        Contact Directly:<br/>
        (801)-935-1273<br/>
        louie@noblemanagement.net<br/><br/>
        Noble Stone Management &copy; 2018</p>

        {/* <div className="footer-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
        </div> */}

    </div>

    <div className="footer-right">

        <p>Inquiries? Message me!</p>

        {!this.state.messageSent ?
            <div className="frontpage-form">
                <input type="text" name="name" placeholder="Name" onChange={(e) => this.handleInput("name", e)}/>
                <input type="text" name="email" placeholder="Email" onChange={(e) => this.handleInput("email", e)}/>
                <textarea name="message" placeholder="Message" onChange={(e) => this.handleInput("message", e)}></textarea>
                <button onClick={()=>this.sendMessage()}>Send</button>
            </div >
        :
            <div>
                <div class="checkmark-circle">
                    <div class="background"></div>
                    <div class="checkmark draw"></div>
                </div>
                <p>Thanks for you feedback, we will reach out as soon as we can!</p>
            </div>
        }

    </div>

    </footer>
        )
    }

}