import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";

function Home() {
  return (
    <div id="home-page">
      <h1>IronBeers</h1>
      <div>
        <div className= "each-home-link">
          <Link to="/beers">
            <img src={beersImg} alt="beers" width="1000" />
          </Link>
          <h2>All beers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            dignissimos in eligendi suscipit reprehenderit nobis aspernatur,
            necessitatibus recusandae eum reiciendis quas ratione sint nemo
            labore fugiat facilis, provident, tempore rerum?
          </p>
        </div>
        <div className= "each-home-link">
          <Link to="/random-beer">
            <img src={beersImg} alt={randomBeerImg} width="1000" />
          </Link>
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            dignissimos in eligendi suscipit reprehenderit nobis aspernatur,
            necessitatibus recusandae eum reiciendis quas ratione sint nemo
            labore fugiat facilis, provident, tempore rerum?
          </p>
        </div>
        <div className= "each-home-link">
          <Link to="/new-beer">
            <img src={newBeerImg} alt="beers" width="1000" />
          </Link>
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            dignissimos in eligendi suscipit reprehenderit nobis aspernatur,
            necessitatibus recusandae eum reiciendis quas ratione sint nemo
            labore fugiat facilis, provident, tempore rerum?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
