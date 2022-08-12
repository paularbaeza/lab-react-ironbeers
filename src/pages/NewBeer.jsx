import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const navigate = useNavigate();

  const [beerToAdd, setBeerToAdd] =useState({
    name:"",
    tagline:"",
    description:"",
    first_brewed:"",
    brewer_tips:"",
    attenuation_level:0,
    contributed_by:""
  })

const handleChange = (event) => {
    //console.log(event.target.value)
    const beerToAddCopy = {...beerToAdd}
    beerToAddCopy[event.target.name] = event.target.value
    setBeerToAdd(beerToAddCopy)
    
}
console.log(beerToAdd)
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        beerToAdd
      );
      console.log("beer added");

      navigate("/");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <Header />
      <div id="add-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={handleChange} value={beerToAdd.name} />

          <label htmlFor="tagline">Tagline:</label>
          <input type="text" name="tagline" onChange={handleChange} value={beerToAdd.tagline} />

          <label htmlFor="description">Description:</label>
          <input type="text" name="description" onChange={handleChange} value={beerToAdd.description}/>

          <label htmlFor="first_brewed">First brewed:</label>
          <input type="text" name="first_brewed" onChange={handleChange} value={beerToAdd.first_brewed}/>

          <label htmlFor="brewer_tips">Brewer tips:</label>
          <input type="text" name="brewer_tips" onChange={handleChange} value={beerToAdd.brewer_tips}/>

          <label htmlFor="attenuation_level">Attenuation level:</label>
          <input type="number" name="attenuation_level" onChange={handleChange} value={beerToAdd.attenuation_level}/>

          <label htmlFor="contributed_by">Contributed by:</label>
          <input type="text" name="contributed_by" onChange={handleChange} value={beerToAdd.contributed_by}/>

          <button>ADD NEW</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
