import React, { Component } from 'react';

const PropertyCard = (props) => {
  const {
    _id,
    title,
    type,
    city,
    bedrooms,
    bathrooms,
    price,
    email,
    userID,
    handleSave,
  } = props;



  return (
    <div className="propertyCard">
      <span className="img"><img src="http://placeimg.com/300/200/arch"></img></span>
      <span className="title">{props.title}</span>
      <span className="type">{props.type}</span>
      <span className="bathrooms">{props.bathrooms} bathroom(s)</span>
      <span className="bedrooms">{props.bedrooms} bedroom(s)</span>
      <span className="price">£{props.price}</span>
      <span className="city">{props.city}</span>
      <span className="email">Contact: {props.email}</span>
    </div>
  )
}

export default PropertyCard