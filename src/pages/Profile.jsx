import "./styles/profile.css"
import React from 'react'
import Navbar from "../components/Navbar"
import { useState,useEffect } from "react"
import ListingCard from "../components/ListingCard"
import axios from "axios"
import { useParams } from "react-router-dom"
const Profile = () => {
  const params = useParams()
    const [agentData,setAgentData] =useState()
    const [ listingData,setListingData] = useState()

    function fetchAgentData(){
      axios.get("http://localhost:8080/profile/"+params.id).then(response =>{
        setAgentData(response.data[0][0])
        if (response.data[1][0]) {
          console.log();
          setListingData(response.data[1])
        } else {
          setListingData(false)
        }
      }
      )
    }
    useEffect( ()=>{
      fetchAgentData()
    },[])


  return (
    <div className="Profile">
        <Navbar />
        {agentData == null ? <div>Loading</div> : <>
        <div className="agent-profile">
            <div><img src={agentData.profile_img}/></div>
            <div className="text">
                <h1>{agentData.name} {agentData.surname}</h1>
                <h3>Liscenced real estate agent</h3>
                <h1>{agentData.company}</h1>
            </div>
        </div>
        <div className="agent-flex">
        <div className="agent-description">
        <p>{agentData.description}</p>
        {listingData ? <>
          <div className="listings">
            {listingData.map((listing)=>{
              return(
                <ListingCard img={listing.images[0]} city={listing.city} suburb={listing.suburb} bed={listing.number_of_beds} bath={listing.number_of_baths} garage={listing.number_of_garages} price={listing.price} rob={listing.rent_or_buy} description={listing.description} id={listing.id}/>
              ) 
        })}
        </div>
        </> : <>
        no listing
        </>}

        </div>
        <div className="contact-form ">
                <h1 className="brittany">Contact {agentData.name}</h1>
                <form className="seasons"> 
                    <input placeholder="Name " className="seasons"></input>
                    <input placeholder="Your email" className="seasons" ></input>
                    <textarea placeholder="Message" className="seasons"></textarea>
                    <button>submit</button>
                </form>
        </div>
        </div>
        </>
}
   </div>
  )
}

export default Profile
