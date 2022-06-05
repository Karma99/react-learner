import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from './components/HeaderMenu.js';
import Footer from './components/Footer.js';
import { Outlet } from 'react-router-dom';

function Layout(props) {
  return (
    <div className="app-container">
      <HeaderMenu menuItems={props.menuItems} />

        {/* Load Dynamic Body Component */}
        <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
