import React from 'react';

export default class Login extends React.Component{

    constructor(props){
        super(props);

        this.state = {isLoggedIn : false}; 
    }
    
    handleLoginClick(t) {
        console.log(t);
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(t) {
        console.log(t);
        this.setState({isLoggedIn: false});
    }
    
    render(){
        
        return (
            <span>
                {this.state.isLoggedIn 
                    ? <LogoutButton onClick={this.handleLogoutClick.bind(this, new Date().toLocaleTimeString())} /> 
                    : <LoginButton onClick={this.handleLoginClick.bind(this, new Date().toLocaleTimeString())} />
                }   
            </span> 
        );
    }
}

function LoginButton(props) {
    
    return ( <button onClick={props.onClick} className="button-login">Login</button> );
}
  
function LogoutButton(props) {

    return ( <button onClick={props.onClick} className="button-login">Logout</button> );
}