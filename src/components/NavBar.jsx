import React, { Component } from 'react';
import './components/NavBar.css';
import logo from './logo.png';


class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <img className="logo" src={logo} alt="SE Logo" />
        <ul className="nav">
          <li className="item">View Properties</li>
          <li className="item">Add a Property</li>
        </ul>
      </div>
    );
  }
}
export default NavBar