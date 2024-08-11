import "./styles/postlisting.css"
import React from 'react'
import Navbar from '../components/Navbar'
import { useState,useEffect } from "react"
import axios from "axios"

const PostListing = () => {
  const [user,setUser] = useState(false)
  useEffect(()=>{
    axios.get("http://localhost:8080/check-auth",{ withCredentials: true }).then((response)=>{
        if (response.data == "No token") {
            setUser(false)
        }else{
            setUser(response.data)
            console.log(response.data.id);
        }
    })
},[])
  return (
    <div>
        <Navbar />
        <div className="PostListing ">
        <div>
            <h1 className="brittany">New listing</h1>
            <form method='post' action="https://elevate-estate-backend-1.onrender.com/new-listing" className="input-section" encType="multipart/form-data">
            <input type="text" placeholder="Suburb" name="suburb"  className="seasons"/>
            <input type="text" placeholder="City" name="city" className="seasons"/>
            <input type="text" placeholder="Number of beds" name="number_of_beds" className="seasons"/>
            <input type="text" placeholder="Number of baths" name="number_of_baths" className="seasons"/>
            <input type="text" placeholder="Number of garages" name="number_of_garages" className="seasons"/>
            <input type="text" placeholder="Pet friendly?" name="pet_friendly" className="seasons"/>
            <input type="text" placeholder="Price" name="price" className="seasons"/>
            <input type="text" placeholder="Rent or Buy" name="rent_or_buy" className="seasons"/>
            <input type="file" placeholder="Upload images" className="seasons" multiple name="images"/>
            <input type="text" placeholder="Describe the place" className="seasons" name="description"/>
            {user ? <><input type="hidden" value={user.id} name="agent_id"></input></>:<></>}
            <button>Post</button>
            </form>
        </div>
        <div>
            <img src="../house_hand.png" width="900px" />
        </div>
        </div>
    </div>
  )
}

export default PostListing
