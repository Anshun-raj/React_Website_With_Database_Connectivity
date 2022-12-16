import React,{useState,useEffect} from "react";
import Axios from 'axios';
import Feed1 from "../images/feed1.jpg";
function Feedback()
{
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [age,setAge]=useState("");
  const [text,setText]=useState("");
  const [rate,setRate]=useState("");
  const getFeedback=()=>{
     Axios.post('http://localhost:3001/api/insert',{
        name:name,
        age:age,
        email:email,
        text:text,
        rate:rate,
     }).then(()=>alert('successfully inserted'));
  };
  return(
    <div id="feedback" className="feedback">
          <h1>Feedback</h1>
          <div className="feedback-data">
            <div className="feedback-data-left">
               <img src={Feed1} alt="feedImg" className="feedImg"/>
            </div>
            <div className="feedback-data-right">
            <h3>Feedback Time</h3>
                    <form method="get">
                        <input type="text" name="name" placeholder="enter your name" onChange={(e)=>{setName(e.target.value);}}/><br/>
                        <input type="email" name="email" placeholder="enter your email" onChange={(e)=>{setEmail(e.target.value);}}/><br/>
                        <input type="number" name="age" placeholder="select your age" onChange={(e)=>{setAge(e.target.value);}}/><br/>
                        <textarea name="text" placeholder="message..." onChange={(e)=>{setText(e.target.value);}}/><br />
                        <select name="rate" onChange={(e)=>{setRate(e.target.value);}}>
                            <option>select rating</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select><br/>
                        <button onClick={getFeedback}>Submit</button><br/>
                    </form>
            </div>
          </div>
    </div>
  )
}
export default Feedback;