import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate =  useNavigate(); 
  const handleButtonClick = () => {
    navigate('/results-page');
}; 
  const [zipcode, setZipcode] = useState(0);
  return (
       <div>
          <header>
            <h1>50 Shades of Green</h1>
          </header>

          <div className="dropdowns">
            <select id="skill-level">
              <option value="" disabled selected>Time Commitment</option>
              <option value="Beginner">Low</option>
              <option value="Immediate">Medium</option>
              <option value="Advanced">High</option>
            </select>


            <input type="number" id="zipcode" placeholder="Enter your zipcode here" onChange={(event) => setZipcode(parseInt(event.target.value))}/>


            <select id="budget">
              <option value="" disabled selected>Pick your Budget</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button onClick={handleButtonClick}>Go Green</button>
          </div>
        </div> 
    )
}