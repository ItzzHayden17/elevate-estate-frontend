import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Navbar(){
    const [user,setUser] = useState(false)

    useEffect(()=>{
        axios.get("https://elevate-estate-backend-1.onrender.com/check-auth",{ withCredentials: true }).then((response)=>{
            if (response.data === "No token") {
                setUser(false)
            }else{
                setUser(response.data)
            }
        })
    },[])
    return(
        <div className="Navbar">
            <h2 className="brittany">Elevate Estates</h2>
            <div className="route ">
            <Link to="/"><h2>HOME |</h2></Link>
            <Link to="/agents"><h2>AGENTS |</h2></Link>
            <Link to="/listings"><h2>LISTINGS |</h2></Link>
            {user == false ? <Link to="/losa"><h2>login or register</h2></Link> : <Link to="/my-profile"><h2>PROFILE |</h2></Link>}
            {/* {isAgent == true ? <Link to="/new-listing"><h2>NEW LISTING</h2></Link> :<></> } */}
            
            </div>
        </div>
    )
}