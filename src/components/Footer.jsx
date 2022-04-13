import React from 'react';
import { Apple, Facebook, Instagram, PlayFill, Playstation, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div>
                    <h4>Services</h4>
                    <ul>
                        <li>News TV</li>
                        <li>News FM</li>
                        <li>E-Paper</li>
                    </ul>
                </div>
                <div>
                    <h4>Useful Links</h4>
                    <ul>
                        <li>Partners</li>
                        <li>Press Release</li>
                        <li>Newsletter</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h4>Follow Us</h4>
                    <ul>
                        <li><Facebook /> Facebook</li>
                        <li><Twitter /> Twitter</li>
                        <li><Instagram /> Instagram</li>
                    </ul>
                </div>
                <div>
                    <h4>Download App</h4>
                    <ul>
                        <li><PlayFill /> Google Play</li>
                        <li><Apple /> App Store</li>
                    </ul>
                </div>
            </div>
            <p>Designed by: Rahul Dey<br />&#169; All Rights Reserved 2022</p>
        </footer>
    )
};

export default Footer;