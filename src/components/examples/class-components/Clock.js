import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

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
        
        const codeFilePath = require("../../../uploads/class-components/clock.txt");
        
        return (
            <Container className="my-5">
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
                <Card bg="light" border="light">
                    <Card.Header className="text-center">
                        <a className="btn btn-primary" href={codeFilePath} download>Clock &#8595;</a>
                    </Card.Header>
                    <Card.Body >
                        <iframe title="Clock" className="code-block" type="text/plain" src={codeFilePath} ></iframe>  
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}