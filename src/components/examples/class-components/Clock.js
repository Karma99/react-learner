import React from 'react';
import Card from 'react-bootstrap/Card';
import DownloadCode from '../../DownloadCode.js';

function WelcomeMessage(props){
    return (
        <div className="neonText pulsateText">
            {props.children}
        </div>
    );
}

export default class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick() 
        , 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({date: new Date()});
    }

    render(){
        
        const codeFilePath = require("../../../uploads/class-components/Clock.txt");
        
        return (
            <div className="my-4">
                <Card className="neonBg text-center">
                    <Card.Body>
                        <Card.Text>
                            {/* React Containment : wrapping children elements (Topic : Composition ) */ }
                            <WelcomeMessage>
                                <h1>Hello, <span className="flickerText">Earth</span>!</h1>
                                <hr/>
                                <h2>{this.state.date.toLocaleTimeString()}.</h2>
                            </WelcomeMessage>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <DownloadCode codeFilePath={codeFilePath} />
            </div>
        );
    }
}