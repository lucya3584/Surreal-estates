import React, { Component } from 'react';
import './styles.App.css';
import NavBar from './components/NavBar';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AddProperty from './AddProperty';
import Properties from './Properties'; { }

class App extends Component {
  render() {
    return
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  }
}



export default App;
