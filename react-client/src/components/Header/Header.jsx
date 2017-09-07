import React, { Component } from 'react';
import './Header.css';


class Header extends Component {

  render() {
    return (
      <div className="Header">
      	<div className="material header">
          <h1 className="header-text">Speakers</h1>
          <section>
            <div className="material btn">Make New Post</div>
            <div className="material btn">Link 2</div>
            <div className="material btn">Link 3</div>
            <div className="material btn">Link 4</div>
            <div className="material btn">Link 5</div>
          </section>
        </div>
      </div>
    );
  }
}

export default Header;