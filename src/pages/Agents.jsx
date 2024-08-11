import "./styles/agents.css"
import React from 'react'
import Navbar from '../components/Navbar'
import AgentCard from '../components/AgentCard'
import axios from "axios"
import { useEffect,useState } from "react"
const Agents = () => {

  const [agentData,setAgentData] = useState([])

  useEffect(()=>{
    axios.get("https://elevate-estate-backend-1.onrender.com/agents",{ withCredentials: true }).then(response =>{
      setAgentData(response.data);
      console.log(response.data);
    }).catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div>
        <Navbar />
        {agentData.length == 0 ? <div>Loading</div> : agentData == "No token"? <div> Please log in to see this content</div>:
          <div className="Agents">
                {agentData.map((agent)=>{
                  return(
                    <AgentCard key={agent.id} id={agent.id} img={agent.profile_img} name={agent.name} surname={agent.surname} company={agent.company} />
                  )
                })}
            
              </div>}

    </div>
  )
}

export default Agents
