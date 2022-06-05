import React from 'react';

function WelcomeMessage(props){
    return (
        <div style={{color:props.color}}>
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
        return (
            // React Containment : wrapping children elements (Topic : Composition )
            <WelcomeMessage color="yellow">
                <h1>Hello, {this.props.name}!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </WelcomeMessage>
        );
    }
}