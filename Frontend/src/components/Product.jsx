import React from "react";
import Car1 from "../images/car1.jpeg";
import Car2 from "../images/car2.jpeg";
import Car3 from "../images/car3.jpeg";
import Car4 from "../images/car4.jpeg";
import Car5 from "../images/car5.jpeg";
import Car6 from "../images/car6.jpeg";

function Product()
{
    return(
        <div id="product" className="product">
             <h1>Our Products</h1>
             <div className="product-data">
                 <div className="product-data-card">
                    <img src={Car1} alt="cardImg" className="CardPic"/>
                    <h3>8900 USD</h3>
                    <a href="#" className="buyBtn">Buy Now</a>
                 </div>
                 <div className="product-data-card">
                    <img src={Car2} alt="cardImg" className="CardPic"/>
                    <h3>9990 USD</h3>
                    <a href="#" className="buyBtn">Buy Now</a>
                 </div>
                 <div className="product-data-card">
                    <img src={Car3} alt="cardImg" className="CardPic"/>
                    <h3>1000 USD</h3>
                    <a href="#" className="buyBtn">Buy Now</a>
                 </div>
                 <div className="product-data-card">
                    <img src={Car4} alt="cardImg" className="CardPic"/>
                    <h3>1100 USD</h3>
                    <a href="#" className="buyBtn">Buy Now</a>
                 </div>
                 <div className="product-data-card">
                    <img src={Car5} alt="cardImg" className="CardPic"/>
                    <h3>7950 USD</h3>
                    <a href="#" className="buyBtn">Buy Now</a>
                 </div>
                 <div className="product-data-card">
                    <img src={Car6} alt="cardImg" className="CardPic"/>
                    <h3>8700 USD</h3>
                    <a href="#" className="buyBtn">Buy Now</a>
                 </div>
             </div>
        </div>
    )
}
export default Product;