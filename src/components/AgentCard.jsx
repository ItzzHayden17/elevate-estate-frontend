
import React from 'react'
const AgentCard = (props) => {

  return (
    <div className="AgentCard">
       <img src={props.img} height="150px" width="150px"/>
       <h1 className="brittany">{props.name} {props.surname}</h1>
       <h3>{props.company}</h3>
       <button><a href={"http://localhost:3000/profile/"+props.id}>View</a></button>
    </div>
  )
}

export default AgentCard
