import React from 'react'

 import { Link } from "react-router-dom";
 import casa from "../assets/casa1.png"


function Header() {
  return (
    <div>
        <header><Link to="/"><img src={casa} alt="home" width="50px" /></Link> </header>
    </div>
  )
}

export default Header