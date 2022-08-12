import './App.css';

import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"

import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';
import Error from "./pages/Error"


function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/beers" element={<ListBeers/>} />
      <Route path="/beers/:id/details" element={<SingleBeer/>} />
      <Route path="/random-beer" element={<RandomBeer/>} />
      <Route path="/new-beer" element={<NewBeer/>} />
      <Route path="/error" element= {<Error/>}/>


      </Routes>

    </div>
  );
}

export default App;
