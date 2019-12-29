import React from 'react';
import './components/NavBar.css';
import Logo from './logo.png';

function NavBar() {
  return (
    <div className="NavBar">
      <img className="logo" src={logo} alt="SE Logo" />
    </div>
  );
}
export default NavBar