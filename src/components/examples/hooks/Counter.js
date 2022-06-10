import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ExampleBody from '../../../utils/ExampleBody.js';

export default function Counter() {
    
  const codeFilePath = require("../../../uploads/hooks/Counter.txt");
  
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  return (
    <ExampleBody codeFilePath={codeFilePath}>
      <p>You clicked <span className="text-primary">{count}</span> times.</p>
      <Button variation="dark" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </ExampleBody>
  );
}