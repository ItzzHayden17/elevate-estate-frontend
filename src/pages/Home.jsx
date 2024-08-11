import "./styles/home.css"
import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search';
import GoogleAPI from '../components/GoogleAPI';
import GitForm from '../components/GitForm';
import { useState } from "react";
import ListingCard from "../components/ListingCard";


const Home = () => {
  const [ listingData,setListingData] = useState([])
 

  function setData(e){
    setListingData(e)
  }
  return (
    <div>
        <div className="App">
      <Navbar />
      <div className="section_1">
      <div className="search">
        <Search onHover={setData}/>
      </div>
      {listingData ? <div className="Listings"><div className="z-index">
        {listingData.map((listing)=>{
          return(
            <ListingCard img={listing.images[0]} city={listing.city} suburb={listing.suburb} bed={listing.number_of_beds} bath={listing.number_of_baths} garage={listing.number_of_garages} price={listing.price} rob={listing.rob} description={listing.description} id={listing.id}/>
          )
        })}
      </div>
      </div> : <></>}
      </div>
      <div className="section_2">
        <h1 className='brittany'>Why us?</h1>
        <div className="features">
          <div className="feature"><img src="../house_icon.png" width="200px"></img><h4>Heading</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
          <div className="feature"><img src="../keys_icon.png" width="200px"></img><h4>Heading</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
          <div className="feature"><img src="../100_icon.png" width="200px"></img><h4>Heading</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
          <div className="feature"><img src="../coin_icon.png" width="200px"></img><h4>Heading</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        </div>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet eros at justo vehicula dignissim. dignissim quis metus</h3>
      </div>
      <div className="section_3">
        <div className="text-container">
          <h1 className='seasons'>SA’s most trusted?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet eros at justo vehicula dignissim. dignissim quis metusLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet eros at justo vehicula dignissim. dignissim quis metus</p>
          <button>more</button>
        </div>
          <img src="../house_collage.png" width="400px"></img>
      </div>
      <div className="section_4">
      <div className="text-container">
          <h1 className='seasons'>Get in touch with an agent</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet eros at justo vehicula dignissim. dignissim quis metusLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet eros at justo vehicula dignissim. dignissim quis metus</p>
          <button>more</button>
        </div>
          <img src="../woman.png" width="400px"></img>
      </div>
      <GoogleAPI />
      <GitForm/>
    </div>
    </div>
  )
}

export default Home
