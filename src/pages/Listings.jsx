import "./styles/listings.css"
import ListingCard from '../components/ListingCard'
import Search from "../components/Search"
import React from 'react'
import { useState,useEffect } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"

const Listings = () => {
    const [ listingData,setListingData] = useState([])
    const [isSearching,setIsSearching] = useState(false)

    function setData(e){
      if (e === undefined) {
      }else{
        setListingData(e)
      }
    }

    useEffect(()=>{
      axios.get("https://elevate-estate-backend-1.onrender.com/listings").then((data)=>{
        setListingData(data.data)
        console.log(data.data);
      })
    },[])
  return (
    <div>
    <Navbar/>
    <div className="Listings">
      <div className="search">
      <Search onHover={setData}/>
      </div>

      <div>
        {listingData ? <div className="Listings-listing">        
      {listingData.map((listing)=>{
            return(
            <ListingCard img={listing.images[0]} city={listing.city} suburb={listing.suburb} bed={listing.number_of_beds} bath={listing.number_of_baths} garage={listing.number_of_garages} price={listing.price} rob={listing.rob} description={listing.description} id={listing.id}/>
            )
        })}</div> : <div></div> }
      </div>

    </div>
    </div>
  )
}

export default Listings
