import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import ExampleBody from '../../../utils/ExampleBody.js';

export default function Counter() {
    
  const codeFilePath = require("../../../uploads/hooks/Counter.txt");
  
  // Declare a new state variable "count" and a function setCount to modify the variable  
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:  
  useEffect(() => {    
    // Update the document title using the browser API   
    document.title = `Count: ${count} `;  
  }, [count]); // Performance Optimization : Only re-run the effect if count changes

  return (
    <ExampleBody codeFilePath={codeFilePath}>
      <p>You clicked <span className="text-primary">{count}</span> times.</p>
      <Button variant="outline-primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </ExampleBody>
  );
}