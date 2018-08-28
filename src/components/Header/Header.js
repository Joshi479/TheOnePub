import React, { Component } from 'react';
import Logo from '../Logo/Logo.js'
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
         <div className="row column">
            <h2 className="app-name">The One Pub</h2>
         </div>     
      </header>
    );
  }
}