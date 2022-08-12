import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ListBeers() {
  const [beersList, setBeersList] = useState([]);
  const [beerListDisplayed, setBeerListDisplayed] = useState([])
  const [isFetching, setIsFetching] = useState(true);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getBeersList();
  }, []);

  const getBeersList = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      //console.log(response.data)
      setBeersList(response.data)
      setBeerListDisplayed(response.data);
      setIsFetching(false);
    } catch {
      navigate("/error");
    }
  };

 const handleSearch = (event) => {
    let searchValue = event.target.value
    setSearch(searchValue)
    //console.log(searchValue)
    let searchResults = beersList.filter((eachBeer)=> {
        return eachBeer.name.includes(searchValue)
    })
    //console.log(searchResults)
    setBeerListDisplayed(searchResults)
 }


  if (isFetching === true) {
    return <h2>...Loading Beer List</h2>;
  }



  return (
    <div>
      <Header />
      <div id="search">
        <label htmlFor="search">Search</label>
        <input type="text" name="search" onChange={handleSearch} value={search} />
      </div>
      {beerListDisplayed.map((eachBeer) => {
        return (
          <div key={eachBeer._id} className="beer-list">
            <img src={eachBeer.image_url} alt="beer" width="100px" />
            <div className="each-beer-list">
              <Link
                to={`/beers/${eachBeer._id}/details`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <h1>{eachBeer.name}</h1>
                <h3>{eachBeer.tagline}</h3>
                <p>
                  <b>Created by:</b> {eachBeer.contributed_by}
                </p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListBeers;
