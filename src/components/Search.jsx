import axios from "axios";
import { useEffect, useState } from "react";

export default function Search(props){
    const [city, setCity] = useState("any");
    const [bed, setBed] = useState("any");
    const [bath, setBath] = useState("any");
    const [rob, setRob] = useState("any");
    const [price, setPrice] = useState("any");
    const [searching, setSearching] = useState(false);
    const [listings, setListings] = useState();
  
    function handleChange(e) {
      var target = e.target.name;
      var value = e.target.value;
  
      if (target === "city") {
        setCity(value);
      } else if (target === "bed") {
        setBed(e.target.value);
      } else if (target === "bath") {
        setBath(e.target.value);
      } else if (target === "rob") {
        setRob(e.target.value);
      } else if (target === "price") {
        setPrice(e.target.value);
      }
    }

  async function fetchData(e) {
    e.preventDefault()
      console.log("Search triggered");
      var searchParams = `http://localhost:8080/listing/${city}/${bed}/${bath}/${rob}/${price}`
     await axios.get(searchParams).then(data=>{
        setListings(data.data)
        
      })

      
    }
    props.onHover(listings)
    return(
        <div>
        <div className="Search">
            <input name="search" value="" placeholder="Search suburb"></input>
        </div>
        <div className="App">
      <form className="filter" >
        <div className="options">
          <select name="city" onChange={handleChange}>
            <option value="any">
              City
            </option>
            <option value="Pretoria" name="Pretoria">
              Pretoria
            </option>
            <option value="Springs" name="Springs">
              Springs
            </option>
          </select>

          <select name="bed" onChange={handleChange}>
            <option value="any" >
              Number of Beds
            </option>
            <option value={1} name="1">
              1
            </option>
            <option value={2} name="2">
              2
            </option>
            <option value={3} name="3">
              3
            </option>
          </select>

          <select name="bath" onChange={handleChange}>
            <option value="any" >
              Number of Baths
            </option>
            <option value={1} name="1">
              1
            </option>
            <option value={2} name="2">
              2
            </option>
            <option value={3} name="3">
              3
            </option>
          </select>
          <select name="rob" onChange={handleChange}>
            <option value="any" name="Any">
              Rent or Buy
            </option>
            <option value="Buy" name="Buy">
              Buy
            </option>
            <option value="Rent" name="Rent">
              Rent
            </option>
          </select>
          <select name="price" onChange={handleChange}>
            <option value="any  " name="Any">
              Price range
            </option>
            <option value={1} name="1">
              1
            </option>
            <option value={2} name="2">
              2
            </option>
            <option value={3} name="3">
              3
            </option>
          </select>
        </div>
        <button onClick={fetchData}>Search</button>
      </form>
      
    </div>
        </div>
    )
}