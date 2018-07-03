import React from 'react'
import logo from '../../assets/images/logo.png'
import './footer.css'


export default function Footer(props) {
    return (
        <footer className="footer-distributed">

        <div className="footer-left">

    <img src={logo} height="50px" alt="logo" />

    <p className="footer-company-name">Noble Stone Management &copy; 2015</p>

    <div className="footer-icons">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
    </div>

</div>

<div className="footer-right">

    <p>Contact Us</p>

    <form action="#" method="post">

        <input type="text" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button>Send</button>

    </form>

</div>

</footer>
    )
}