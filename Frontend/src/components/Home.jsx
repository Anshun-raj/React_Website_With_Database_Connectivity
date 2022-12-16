import React from "react";
import Navbar from "./Navbar";
import CarImg from "../images/carHome.jpeg";
function Home() {
  return (
    <div id="home" className="home">
      <Navbar />
      <div className="home-data">
        <div className="home-data-left">
          <h1>It's a Website of <span>Automobile</span> Collection.</h1>
          <p>We are here to give you the best of ours.</p>
          <div className='home-btns'>
            <a href='#' className='btn'>Know More</a>
            <a href='#' className='btn'>Buy More</a>
          </div>
        </div>
        <div className="home-data-right">
            <img src={CarImg} alt="carImage" className="carImg"/>
        </div>
      </div>
    </div>
  )
}
export default Home;