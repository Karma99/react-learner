import React from 'react';
import Button from 'react-bootstrap/Button';
import ExampleBody from '../../../utils/ExampleBody.js';

export default class Counter extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    componentDidUpdate(){
      document.title = `Count: ${this.state.count} `; 
      console.log('Render: '+1); 
    }
  
    render() {
      const codeFilePath = require("../../../uploads/class-components/Counter.txt");
      console.log('Render: '+2); 
      return (
        <ExampleBody codeFilePath={codeFilePath}>
        <p>You clicked <span className="text-danger">{this.state.count}</span> times.</p>
        <Button variant="outline-danger" onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
        </Button>
        </ExampleBody>
      );
    }
  }