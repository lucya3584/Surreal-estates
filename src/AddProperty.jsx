import React, { Component } from 'react';
import './AddProperty.css';

class AddProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: '',
        city: '',
        bedrooms: 0,
        bathrooms: 0,
        price: 0,
        email: '',
      }
    }
  }

  handleAddProperty = (event) => {
    event.preventDefault();

  }

  handleFieldChange = (event) => {
    event.preventDefault()
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    return <div className="AddProperty">
      <form className="addForm" onSubmit={this.handleAddProperty}>

        <div className="input">Listing title:</div>

        <input className="input" type="text" name="title" onChange={this.handleFieldChange}></input>

        <div className="input">Listing type:</div>

        <select className="input" name="type" onChange={this.handleFieldChange}>
          <option value="Flat">Flat</option>
          <option value="Detached">Detached</option>
          <option value="Semi-Detached">Semi-Detached</option>
          <option value="Terraced">Terraced</option>
          <option value="End of Terrace">End of Terrace</option>
          <option value="Cottage">Cottage</option>
          <option value="Bungalow">Bungalow</option>
        </select>

        <div className="input">City:</div>

        <select className="input" name="city" onChange={this.handleFieldChange}>
          <option value="Manchester">Manchester</option>
          <option value="Leeds">Leeds</option>
          <option value="Liverpool">Liverpool</option>
        </select>

        <div className="input">No. of bedrooms:</div><input className="input" type="text" name="bedrooms" onChange={this.handleFieldChange}></input>

        <div className="input">No. of bathrooms:</div><input className="input" type="text" name="bathrooms" onChange={this.handleFieldChange}></input>

        <div className="input">Price:</div><input className="input" type="text" name="price" onChange={this.handleFieldChange}></input>

        <div className="input">Contact email:</div><input className="input" type="text" name="email" onChange={this.handleFieldChange}></input>

        <button className="input" type="submit">Add</button>

      </form>

    </div >
  }
};


export default AddProperty