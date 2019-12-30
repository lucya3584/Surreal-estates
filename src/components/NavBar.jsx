import React, { Component } from 'react';
import './components/NavBar.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <img className="logo" src={logo} alt="SE Logo" />
        <ul className="nav">
          <li className="item">View Properties</li>
          <li className="item">Add a Property</li>
          <Link className="item" to="/">See Properties</Link>
          <Link className="item" to="/add-property">Add a Property</Link>
        </ul>
      </div>
    );
  }
}
export default NavBar