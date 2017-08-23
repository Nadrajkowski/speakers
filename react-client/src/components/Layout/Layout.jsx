import React, { Component } from 'react';
import './Layout.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Router from '../Router/Router';

class Layout extends Component {

  render() {
    return (
      <div className="Layout">
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default Layout;