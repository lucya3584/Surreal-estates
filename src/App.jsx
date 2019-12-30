import React, { Component } from 'react';
import './styles.App.css';
import NavBar from './components/NavBar';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AddProperty from './AddProperty';
import Properties from './Properties';

class App extends Component {
  render() {
    return <NavBar />
  }
}



export default App;
