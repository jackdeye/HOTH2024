import React from "react";
import img from "/src/assets/images/tree1.png"

export default function PlantRecommend({plant, imageUrl}) {
    return (
        <div className="plantRecommend">
            <h2>{plant}</h2>
            <div className="plantImg"><img src={imageUrl} alt="Tree" /></div>
            {/* <h2>Cost Goes Here!</h2>
            <h2>Ease of Care Goes Here!</h2> */}
        </div>

    )
}