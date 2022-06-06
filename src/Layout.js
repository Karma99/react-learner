import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from './components/HeaderMenu.js';
import Footer from './components/Footer.js';
import { Outlet } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Layout(props) {
  return (
    <div className="app-container">
      <HeaderMenu menuItems={props.menuItems} />

       <div className="body-container">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
          {/* Load Dynamic Body Component */}
          <Outlet />

        </div>

      <Footer />
    </div>
  );
}

export default Layout;
