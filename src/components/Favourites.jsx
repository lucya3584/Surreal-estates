import React, { Component } from 'react';
import PropertyCard from './components/PropertyCard'
import Axios from 'axios';
import '../styles/Favourites.css';
import FaveCards from './FaveCards';


class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {

      results: [],
      error: false,
      favourites: [],
    }
  }
  componentDidMount() {
    Axios.get(`http://localhost:3000/api/v1/Favourite/`)
      .then(response => {
        this.setState({
          results: response.data,
        })
      })
  }

  render() {
    return (
      <div className="favourites">
        {this.state.results && this.state.results.length > 0 ?
          this.state.results.map(property => (
            <FaveCards userID={this.props.userID} key={property._id}
              {...property} />
          )) : <div className="error">Error!</div>}
      </div>
    )
  }
}






export default Favourites;