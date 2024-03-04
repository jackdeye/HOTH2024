import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import tree_footer from "/src/assets/images/tree_footer.png";

export default function HomePage({setZipcode}) {
  const navigate = useNavigate();


  const handleButtonClick = () => {
    navigate('/results-page');
}; 
  return (
       <div>
          <header>
            <h1>50 Shades of Green</h1>
          </header>

          <Link to='/about-page'> About </Link>

          <div className="dropdowns">
            <input type="number" id="zipcode" placeholder="Enter your zipcode here" onChange={(event) => setZipcode(parseInt(event.target.value))}/>


            <select id="skill-level">
              <option value="" disabled selected>Time Commitment</option>
              <option value="Beginner">Low</option>
              <option value="Immediate">Medium</option>
              <option value="Advanced">High</option>
            </select>


    


            <select id="budget">
              <option value="" disabled selected>Pick your Budget</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <footer>
              <img className="footerImage" src={tree_footer}></img>
            </footer>

            <button onClick={handleButtonClick}>Go Green</button>

          </div>
        </div> 
    )
}
