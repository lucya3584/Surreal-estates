import React, { Component } from 'react';
import PropertyCard from './components/PropertyCard';
import Axios from 'axios';

class Properties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      error: false,
    }
  }
  componentDidMount() {
    Axios.get(`http://localhost:3000/api/v1/PropertyListing/`)
      .then(response => {
        return this.setState({
          results: response.data,
        })
      })
      .catch((err) => {
        return this.setState({
          error: true,
        })
      })
  }

  render() {
    return
    <div className="properties">
      {this.state.results && this.state.results.length > 0 ?
        this.state.results.map(property => (
          <PropertyCard key={property._id}
            {...property} />
        )) : <div className="error">Oh no! There has been an error!</div>
      }
    </div>
  }

  export default Properties