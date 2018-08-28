import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import './Facebook.css';

export default class Facebook extends Component{
    constructor(props){
        super(props);
        var context = this;
    }
    componentDidMount() {
        
    }
    render(){
        const responseFacebook = (response) => {
            console.log(response);
        }

        const componentClicked = () => {
            console.log("Yes");
        }

        return(
            //https://developers.facebook.com/apps/223403991689706/settings/basic/
            <FacebookLogin
                appId="223403991689706"
                autoLoad={false}
                fields="name,email,picture"
                textButton=""
                cssClass="button social facebook"
                onClick={componentClicked}
                icon={<span><span className="social-icon fa fa-facebook" aria-hidden="true"></span><span className="social-text">Facebook</span></span>}
                callback={responseFacebook} 
            >                
            </FacebookLogin>
        );        
    }
}