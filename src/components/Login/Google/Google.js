import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import './Google.css';

export default class Google extends Component{
    constructor(props){
        super(props);
        var context = this;
    }
    componentDidMount() {
        
    }
    render(){
        const responseGoogle = (response) => {
            console.log(response);
        }
        return(
            //qqRtp0C6fXiB6ZAakKupc7M9
            //https://console.developers.google.com/apis/credentials?project=the-one-pub&folder&organizationId
            <GoogleLogin
                clientId="163207306674-qvifqvgc1lppcfc01uc9rli6lppd8nna.apps.googleusercontent.com"                
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                className="button social google-plus"
            >
                <span className="social-icon fa fa-google" aria-hidden="true"></span>
                <span className="social-text">Google +</span>
            </GoogleLogin>
        );        
    }
}