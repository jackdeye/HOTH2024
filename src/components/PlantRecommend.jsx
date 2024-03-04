import React from "react";
// import img from "/src/assets/images/images.png"

export default function PlantRecommend({plant, imageUrl}) {
    return (
        <div className="plantRecommend">
            <h2>Plant Name: {plant}</h2>
            <img src={imageUrl} alt="Tree" />
            <h2>Cost Goes Here!</h2>
            <h2>Ease of Care Goes Here!</h2>
        </div>

    )
}