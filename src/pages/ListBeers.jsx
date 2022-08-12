import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ListBeers() {
  const [beersList, setBeersList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

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
      setBeersList(response.data);
      setIsFetching(false);
    } catch {
      navigate("/error");
    }
  };

  if (isFetching === true) {
    return <h2>...Loading Beer List</h2>;
  }

  return (
    <div>
      <Header />

      {beersList.map((eachBeer) => {
        return (
          <div key={eachBeer._id} className="beer-list">
              <img src={eachBeer.image_url} alt="beer" width="100px" />
              <div className="each-beer-list">
              <Link to={`/beers/${eachBeer._id}/details`} style={{ textDecoration: "none", color:"black" } }>
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
