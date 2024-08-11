import axios from 'axios'
import { useEffect,useState } from 'react'
import Navbar from '../components/Navbar'
import './styles/MyProfile.css'
import ListingCard from '../components/ListingCard'

const MyProfile = () => {
    const [userData,setUserData] = useState(false)
    const [isAgent,setIsAgent] = useState(false)
    const [agentListings,setAgentListings] = useState()
    const [wishlist,setWishlist] = useState([])
    const [favourite,setFavourite] = useState([])
    
    useEffect(()=>{
        axios.get(`http://localhost:8080/my-profile`,{ withCredentials: true }).then((response)=>{
            setUserData(response.data[0][0])

              if (response.data[0][0].wishlist_listing_id) {
                response.data[0][0].wishlist_listing_id.forEach((listing_id)=>{
                  axios.get(`http://localhost:8080/listing/`+listing_id).then((response)=>{
                    setWishlist(prev => [...prev,response.data])
                  })
                })
              }
              if (response.data[0][0].favourite_listing_id) {
                response.data[0][0].favourite_listing_id.forEach((listing_id)=>{
                  axios.get(`http://localhost:8080/listing/`+listing_id).then((response)=>{
                    setFavourite(prev => [...prev,response.data])
                  })
                })
              }
            try {
                if (response.data[0][0].years_of_experience) {
                  setIsAgent(true)
                  if (response.data[1][0]) {
                    setAgentListings(response.data[1])
                  } else {
                    setAgentListings(false)
                  }
                } else {
                    setIsAgent(false)
                }
            } catch (error) {
              console.log(error);
            }

        })
    },[])

    
    
  return (
    <>
    <Navbar />
    {userData ?
    <div className='MyProfile'>
      <div className='details'>
        <div className='email'>
          <h1>{userData.name} {userData.surname}</h1>
          <p>{userData.email}</p>
          </div>
        <button>Edit</button>
        {isAgent? <><a href='/new-listing'><button>New Listing</button></a></> :<></>}  
        <a href="http://localhost:8080/logout" className='span'>
        Log out
        </a>
      </div>
      <div className='test'>
      {isAgent ? <div>
        <h3 className='brittany'>My listings</h3>
          <div className=' agent-listing'>
        {agentListings ? agentListings.map((agentListings)=>{
          return(
            <ListingCard img={agentListings.images[0]} city={agentListings.city} suburb={agentListings.suburb} bed={agentListings.number_of_beds} bath={agentListings.number_of_baths} garage={agentListings.number_of_garages} price={agentListings.price} rob={agentListings.rob} description={agentListings.description} id={agentListings.id}/>
          )
        })
        :<>no listing</>}
        </div>
      </div> : <></>}
      <div>
        <h3 className='brittany'>My Wishlist</h3>
        <div className='wishlist'>
          {wishlist ? wishlist.map((agentListings)=>{
            return(
              <ListingCard img={agentListings.images[0]} city={agentListings.city} suburb={agentListings.suburb} bed={agentListings.number_of_beds} bath={agentListings.number_of_baths} garage={agentListings.number_of_garages} price={agentListings.price} rob={agentListings.rob} description={agentListings.description} id={agentListings.id}/>
            )
          }) : <>No Wishlist</>}
        </div>
      </div>
      <div>
      <h3 className='brittany'>My Favourites</h3>
      <div className='favourite'>
      {favourite ? favourite.map((agentListings)=>{
            return(
              <ListingCard img={agentListings.images[0]} city={agentListings.city} suburb={agentListings.suburb} bed={agentListings.number_of_beds} bath={agentListings.number_of_baths} garage={agentListings.number_of_garages} price={agentListings.price} rob={agentListings.rob} description={agentListings.description} id={agentListings.id}/>
            )
          }) : <>No Favourites</>}
      </div>
      </div>
    </div>
    </div>:
    <></>
}
    </>
  )
}

export default MyProfile
