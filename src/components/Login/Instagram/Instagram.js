import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import InstagramLogin from 'react-instagram-login';
import './Instagram.css';


export default class Instagram extends Component{
    constructor(props){
        super(props);
        var context = this;
    }
    componentDidMount() {
        
    }
    render(){
        const responseInstagram = (response) => {
            console.log(response);
        }

        const componentClicked = () => {
            console.log("Yes");
        }

        return(
            //https://developers.facebook.com/apps/223403991689706/settings/basic/
            <InstagramLogin
                clientId="223403991689706"
                cssClass="button social instagram"
                onSuccess={responseInstagram}
                onFailure={responseInstagram} 
            >
                <span><span className="social-icon fa fa-instagram" aria-hidden="true"></span>
                <span className="social-text">Instagram</span></span>
            </InstagramLogin>
        );        
    }
}