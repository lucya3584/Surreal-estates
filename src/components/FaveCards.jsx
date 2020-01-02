import React, { Component } from 'react';
import Axios from 'axios';
import '../styles/FaveCards.css'

class FaveCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: [],
    }
  }

  componentDidMount() {
    console.log(this.props.propertyListing)
    Axios.get(`http://localhost:3000/api/v1/PropertyListing/${this.props.propertyListing}`)
      .then(response => {
        this.setState({
          favourite: response.data,
        })
      }
      )
  }


  render() {
    return <div className="faveCard">
      <span>{this.state.favourite.title}</span><span><button input="button">Delete</button></span>
    </div>


  }
}



export default FaveCards;