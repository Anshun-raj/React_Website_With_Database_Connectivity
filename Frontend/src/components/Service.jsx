import React from "react";
import Ser1 from "../images/ser1.png";
import Ser2 from "../images/ser2.png";
import Ser3 from "../images/ser3.png";
import Ser4 from "../images/ser4.png";
import Ser5 from "../images/ser5.png";
import Ser6 from "../images/ser6.png";

function Service()
{
    return(
        <div id="service" className="service">
             <h1>Our Service</h1>
             <div className="service-data">
                 <div className="service-data-card">
                    <a href="#"><img src={Ser1} alt="serviceCard" className="servImg"/>CALL CENTER SERVICES</a> 
                     <p>Customer service is one of the most important aspects in the automobile industry. More and more customers are getting choosy about which car to buy or which dealer to go with. We have a team of expert call center agents who can provide the best call center services to clients:- <li>Telemarketing</li> <li>Inbound Call Center</li></p>
                 </div>
                 <div className="service-data-card">
                    <a href="#"><img src={Ser2} alt="serviceCard" className="servImg"/>ACCOUNTING & BOOKKEEPING</a> 
                     <p>Keeping finances on track is of utmost importance in the automobile industry. Automotive companies need to keep an eye on the cash flow and also create daily reports about the company's performance. Our team of expert accountants and bookkeepers can help you in:- 
                        <li>Accounting Services</li> <li>Bookkeeping Services</li></p>
                 </div>
                 <div className="service-data-card">
                    <a href="#"><img src={Ser3} alt="serviceCard" className="servImg"/>DATA ENTRY SERVICES</a> 
                     <p>Digitization in the automobile industry has led to an abundance in online data entry tasks for the employees. The automobile industry is progressing at a rapid rate and the amount of data being generated is only increasing at an exponential rate. Our team of expert data entry specialists can help you in:- <li>Invoice Data Entry</li> <li>Online Catalogs</li></p>
                 </div>
                 <div className="service-data-card">
                    <a href="#"><img src={Ser4} alt="serviceCard" className="servImg"/>CREATIVE DESIGN SERVICES</a> 
                     <p>Automobile industry clients are always looking for creative designs for their marketing purpose.Creative designs have the power to attract the automobile industry customers towards buying their product.Our team of creative designers can help you design some of the most innovative and attractive designs.Our services include:- <li>Graphic Design</li> <li>Advertising</li></p>
                 </div>
                 <div className="service-data-card">
                    <a href="#"><img src={Ser5} alt="serviceCard" className="servImg"/>ENGINEERING SERVICES</a> 
                     <p>Automobile industry usually makes use of a lot of educational audio and video. Creating transcripts for these files become important for future reference. Converting the files into transcripts in multiple languages is a time-consuming task. Our expert transcription services include:- <li>Crash & Safety Analysis</li><li>Chassis and Body</li></p>
                 </div>
                 <div className="service-data-card">
                    <a href="#"><img src={Ser6} alt="serviceCard" className="servImg"/>TRANSCRIPTION SERVICES</a> 
                     <p>Our team comprises of some of the most talented engineers from different fields including mechanical, architectural, structural, civil, electrical, etc. We have the required skills, expertise, and bandwidth to provide the clients of the automobile industry with the following services:- <li>Business Transcription</li><li>Bilingual Transcription</li></p>
                 </div>
             </div>
        </div>
    )
}
export default Service;