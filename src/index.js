import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './assets/css/custom.css';
import { menuItems, sliderImages, toDoList, faqList } from './json/homeJson.js';
import { PRODUCTS, PRODUCT_OPTIONS } from './json/exampleJson.js';
import  * as common  from './utils/CommonFunctions.js';

import Layout from './Layout';
import Home from './pages/Home.js';

/* Examples: Class Component */
import Clock from './components/examples/class-components/Clock.js';
import Warning from './components/examples/class-components/Warning.js';
import Toggle from './components/examples/class-components/Toggle.js';
import Login from './components/examples/class-components/Login.js';
import FormExample from './components/examples/class-components/FormExample.js';
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
        
        {/* Start Layout Route wrapper */}
        <Route path="/" element={
            <Layout homeJson={{
                menuItems: menuItems,
                sliderImages: sliderImages
              }}
              common={common} 
            />
          } 
        >
          
          <Route index element={<Home homeJson={{toDoList:toDoList, faqList:faqList, generateList: common.generateList}}/>} />

          <Route path="quick-note">
            <Route path="react-installation" />
            <Route path="useful-package" />
            <Route path="react-doc-summary" />
          </Route>

          <Route path="class-component-examples">
            <Route path="clock"   element={<Clock />} />
            <Route path="warning" element={<Warning />}/>
            <Route path="toggle"  element={<Toggle />}/>
            <Route path="login"   element={<Login />}/>
            <Route path="form"    element={<FormExample  productOptions={PRODUCT_OPTIONS}/>}/>
            <Route path="calculator"     element={<Calculator />}/>
            <Route path="search-product" element={<FilterableProductTable products={PRODUCTS} />}/>
          </Route>

          <Route path="hook-examples">
            <Route path="click-counter" element={<Counter />} />
          </Route>
        
        {/* End of Layout Route wrapper */}
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
