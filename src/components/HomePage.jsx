import React from "react";
import { useNavigate } from 'react-router-dom';
import tree_footer from "/src/assets/images/tree_footer.png";

export default function HomePage() {
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


            <input type="text" id="address" placeholder="Enter your zipcode here" />


            <select id="budget">
              <option value="" disabled selected>Pick your Budget</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <footer>
              <img src={tree_footer}></img>
            </footer>
          </div>
        </div> 
    )
}