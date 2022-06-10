import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DownloadCode from '../../DownloadCode.js';


function LoginButton(props) {
    
    return ( <Button onClick={props.onClick} variant="success">Login</Button> );
}
  
function LogoutButton(props) {

    return ( <Button onClick={props.onClick} variant="danger">Logout</Button> );
}

export default class Login extends React.Component{

    constructor(props){
        super(props);

        this.state = {isLoggedIn : false}; 
    }
    
    handleLoginClick(t) {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(t) {
        this.setState({isLoggedIn: false});
    }
    
    render(){

        const codeFilePath = require("../../../uploads/class-components/Login.txt");

        return (
            <div className="my-4">
                <Card>
                    <Card.Body>
                        <Card.Text>
                            {this.state.isLoggedIn 
                                ? <LogoutButton onClick={this.handleLogoutClick.bind(this, new Date().toLocaleTimeString())} /> 
                                : <LoginButton onClick={this.handleLoginClick.bind(this, new Date().toLocaleTimeString())} />
                            }   
                        </Card.Text>
                    </Card.Body>
                </Card>
                <DownloadCode codeFilePath={codeFilePath} />
            </div> 
        );
    }
}