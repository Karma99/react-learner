import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DownloadCode from '../../DownloadCode.js';

export default class Toggle extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback    
        this.handleClick = this.handleClick.bind(this, new Date().toLocaleTimeString());  
    }
    
    handleClick(t) {    
        this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));  
    }
    
    render() {
        const codeFilePath = require("../../../uploads/class-components/Toggle.txt");

        return (
            <div className="my-4">
                <Card>
                    <Card.Body>
                        <Card.Text>
                        
                            <Button onClick={this.handleClick} variant={this.state.isToggleOn ? 'success' : 'danger'}>
                                {this.state.isToggleOn ? 'On' : 'Off'}
                            </Button>
                                
                        </Card.Text>
                    </Card.Body>
                </Card>
                <DownloadCode codeFilePath={codeFilePath} />
            </div>         
        );
    }
}