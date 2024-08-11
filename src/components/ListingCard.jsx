import "../pages/styles/listing-card.css"
import React from 'react'
import { useState,useEffect } from 'react'

const ListingCard = (props) => {

  function handleClick(e){
    console.log(e.target);
    
  }

  return (
    <div className="ListingCard">
      <a href={"http://localhost:3000/listing/"+props.id}>
      <img src={props.img} height="300px" width="100%"></img>
      </a>
      <div className="listing-info-container">
        <div className="flex">
        <div className="area">
          <h1>{props.city}</h1>
          <h1>{props.suburb}</h1>
        </div>
        <div className="price">
          <h1>R{props.price}</h1>
        </div>
        <div className="actions">
          <button className="like">W</button>
          <button>F</button>
        </div>
        </div>
        <div className="icons">
        <p> {props.bed}</p>
        <p> {props.bath}</p>
        <p> {props.garage}</p>
      </div>
      </div>

    </div>
  )
}

export default ListingCard
