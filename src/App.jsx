import React, { Component } from 'react';
import './styles.App.css';
import NavBar from './components/NavBar';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import AddProperty from './AddProperty';
import Properties from './Properties'; { }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: null,
      name: '',
      email: '',
      picture: '',

    }
  }
  handleLogin = (response) => {
    this.setState({
      userID: response.userID,
      name: response.email,
      picture: response.picture.data.url,
    })
  }
  handleLogout = () => {
    window.BiquadFilterNode.logout(function (response) {
      document.location.reload();
    });
  }
  render() {
    return
    <div>

      <Navbar
        onLogin={this.handleLogin}
        onLogout={this.handleLogout}
        userID={this.state.userID}
        name={this.state.name}
        email={this.state.email}
        picture={this.state.picture} />
      <Switch>
        <Route
          exact path="/"

          render={props => <Properties {...props} userID={this.state.userID} />}
        />
        <Route exact path="/add-property"
          component={AddProperty} />
        <Route exact path="/favourites"
          component={Favourites} />
      </Switch>

    </div>
  );
  }

}



export default App;
