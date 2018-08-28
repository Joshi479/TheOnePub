import React, { Component } from 'react';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Login from './components/Login/Login.js';
import './App.scss';

class App extends Component {
  render() {
    return (      
      <div className="off-canvas-wrapper">
        <Header />
        <Login />
        <div className="main"></div>
        <Footer />   
      </div>      
    );
  }
}

export default App;
