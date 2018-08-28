import React, { Component } from 'react';
import Facebook from './Facebook/Facebook';
import Google from './Google/Google';
import Instagram from './Instagram/Instagram';
import './Login.css';

export default class Login extends Component {    
    constructor(props){
        super(props);
        var context = this;
    }
    componentDidMount() {
        // FB.init({            
        //     appId      : '223403991689706',
        //     status     : true,
        //     xfbml      : true,
        //     version    : 'v0.0' // or v2.6, v2.5, v2.4, v2.3
        // })
    }
  render() {
    // var btnLoginClick = FB.getLoginStatus(function(response){
    //     alert(response);
    // });

    //$(".button").click(btnLoginClick());
    return (
        <div className="login">
            <div className="row column text-center">
                <h2>The One Place For Your <span className="special-text">Entertainment</span></h2>
                <h4>Log In</h4>
                <hr/>
            </div>
            <div className="row">
                <div className="column small-12 large-5 meduim-5 text-center">
                    {/* <span id="btnFaceBookLogin" className="button social facebook">
                        <span className="social-icon fa fa-facebook" aria-hidden="true"></span><span className="social-text">Facebook</span>
                    </span> */}
                    <Facebook />
                </div>
                <div className="column small-12 large-2 meduim-2 text-center">
                    {/* <button type="button" id="btnGoogleLogin" className="button social google-plus">
                        <span className="social-icon fa fa-google" aria-hidden="true"></span><span className="social-text">Google +</span>
                    </button> */}
                    <Google />
                </div>
                <div className="column small-12 large-5 meduim-5 text-center">
                    {/* <button type="button" id="btnInstagramLogin" className="button social instagram">
                        <span className="social-icon fa fa-instagram" aria-hidden="true"></span><span className="social-text"> Instagram</span>
                    </button> */}
                    <Instagram />
                </div>
            </div>
        </div>        
    );
  }
}