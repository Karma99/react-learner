import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './assets/css/custom.css';
import { menuItems, sliderImages, toDoList, faqList } from './json/homeJson.js';
import { PRODUCTS } from './json/exampleJson.js';
import { generateList } from './utils/CommonFunctions.js';

import Layout from './Layout';
import Home from './pages/Home.js';

/* Examples: Class Component */
import Clock from './components/examples/class-components/Clock.js';
import Warning from './components/examples/class-components/Warning.js';
import Toggle from './components/examples/class-components/Toggle.js';
import Login from './components/examples/class-components/Login.js';
import Form from './components/examples/class-components/Form.js';
import Calculator from './components/examples/class-components/Calculator.js';
import FilterableProductTable from './components/examples/class-components/product/FilterableProductTable.js';

/* Examples: Hooks */
import Counter from './components/examples/hooks/Counter.js';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout menuItems={menuItems} />} >
          
          <Route index element={
            <Home homePage={{
                sliderImages: sliderImages, 
                toDoList:     toDoList, 
                faqList:      faqList, 
                generateList: generateList
              }}
            />
          } />

          <Route path="quick-note">
            <Route path="react-installation" />
            <Route path="useful-package" />
            <Route path="react-doc-summary" />
          </Route>

          <Route path="example">

            <Route path="class-component">
              <Route path="clock"   element={<Clock />} />
              <Route path="warning" element={<Warning />}/>
              <Route path="toggle"  element={<Toggle />}/>
              <Route path="login"   element={<Login />}/>
              <Route path="form"    element={<Form />}/>
              <Route path="calculator"     element={<Calculator />}/>
              <Route path="search-product" element={<FilterableProductTable products={PRODUCTS} />}/>
            </Route>

            <Route path="hook">
              <Route path="click-counter" element={<Counter />} />
            </Route>
          
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
