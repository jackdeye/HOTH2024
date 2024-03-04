import React from "react";
import img from "/src/assets/images/tree1.png"

export default function PlantRecommend({plant, imageID}) {
    
    // myFunction() {
    //     var i = plant.indexOf(',');
    //     var
    // }

    return (
        <div className="plantRecommend">
            <h2>{plant}</h2>
            <img className="plantImg" src={imageID} alt="Tree" />
            <a href="https://www.google.com">Go to Google</a>
            {/* <h2>Cost Goes Here!</h2>
            <h2>Ease of Care Goes Here!</h2> */}
        </div>

    )
}