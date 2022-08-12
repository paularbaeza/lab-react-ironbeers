import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SingleBeer() {
  const { id } = useParams();

  const [beerDetails, setBeerDetails] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getBeerDetails();
  }, []);

  const getBeerDetails = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      //(response.data)
      setBeerDetails(response.data);
      setIsFetching(false);
    } catch {
      navigate("/error");
    }
  };

  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
  } = beerDetails;

  if (isFetching === true) {
    return <h2>...Loading Beer Details</h2>;
  }

  return (
    <div>
      <Header />
      <div className="beer-list">
        <img src={image_url} alt="beer" width="200px" />
        <div className="each-beer-list">
          <div className="two-in-a-row">
            <h1>{name}</h1>
            <h1 className="attenuation">{attenuation_level}</h1>
          </div>
          <div className="two-in-a-row">
            <h3 className="gray">{tagline}</h3>
            <p className="first-brewed">{first_brewed}</p>
          </div>
          <p>{description}</p>
          <p className="gray">{contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleBeer;
