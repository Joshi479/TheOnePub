import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row small-up-1 meduim-up-3 large-up-3">
                    <div className="column">
                        <h4>Contact Info</h4>
                        <hr />
                        <a href="#"><span>Phone</span></a>
                        <a href="#"><span>Email</span></a>
                        <a href="#"><span>Address</span></a>                      
                    </div>
                    <div className="column">
                        <h4>Site Map</h4>
                        <hr />
                        <a href="#"><span>About Us</span></a>
                        <a href="#"><span>Services</span></a>
                        <a href="#"><span>Contact Us</span></a>                       
                    </div>
                    <div className="column">
                        <h4>Social Media</h4>
                        <hr />
                        <a href="#"><span>Facebook</span></a>
                        <a href="#"><span>Twitter</span></a>
                        <a href="#"><span>Instagram</span></a>                       
                    </div>
                </div>
            </footer>
        );
    }
}