import React from "react";
import Old from "../images/oldCar.jpg";
function About()
{
    return(
        <div id="about" className="about">
            <h1>About Us</h1>
            <div className="about-data">
               <div className="about-data-left">
                   <h3>About Automobile</h3>
                   <p>Development of the automobile started in 1672 with the invention of the first steam-powered vehicle,which led to the creation of the first steam-powered automobile capable of human transportation, built by Nicolas-Joseph Cugnot in 1769.Inventors began to branch out at the start of the 19th century, creating the de Rivas engine, one of the first internal combustion engines,and an early electric motor.Samuel Brown later tested the first industrially applied internal combustion engine in 1826.Development was hindered in the mid-19th century by a backlash against large vehicles, yet progress continued on some internal combustion engines. The engine evolved as engineers created two- and four-cycle combustion engines and began using gasoline as fuel. The first practical modern automobile and the first car put into series production appeared in 1886, when Carl Benz developed a gasoline-powered automobile and made several identical copies.</p>
                   <h3>Our Motive</h3>
                   <p>We had inaugurated our agency in 2015.We are continuosly working for the development of this agency.We tries to provide qualitative service rather than the decorated one.Delivering the product of their best is our main motive.We deliver the product as same as we say.</p>
               </div>
               <div className="about-data-right">
                   <img src={Old} alt="OldCar" className="oldImg"/>
                   <h4>Oldest Car</h4>
               </div>
            </div>
        </div>
    )
}
export default About;