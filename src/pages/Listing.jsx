import "./styles/listing.css"
import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
const Listing = () => {

  const params = useParams()
  const [listing, setListing] = useState();
  const [loading,setLoading] = useState(false)
  
  useEffect(()=>{
    axios.get("http://localhost:8080/listing/"+params.id).then(data=>{
      console.log(listing);
      setListing(data.data)
      setLoading(true)

    })
    console.log(params.id);
  },[])

      return (
        
        <div >
          <Navbar />
          { loading ? <div className="listing">
            <div className="image-container">
            <img src={listing.images[0]} height="100%" />
          </div>
          <div className="listing-short-description">
            <div>
              <div className="action-buttons">
                <button className="like">Like</button>
                <button className="wish">Wish</button>
              </div>
              <div className="listing-price">R{listing.price}</div>
              <h3>{listing.number_of_beds} Bedroom house to rent</h3>
              <h3>{listing.city}</h3>
              <h3>{listing.suburb}</h3>
            </div>
            <div className="card-icon">
              <p>{listing.number_of_beds}</p>
              <p>{listing.number_of_baths}</p>
              <p>{listing.number_of_garages}</p>
              <button>Contact Agent</button>
            </div>
          </div>
    
          <div className="description"><p>{listing.description}</p></div>
          <div className="images">
            {listing.images.map((image) => {
              return <img src={image} />;
            })}
          </div>
          </div> : <div>Loading</div>
          }

        </div>
      );
}

export default Listing
