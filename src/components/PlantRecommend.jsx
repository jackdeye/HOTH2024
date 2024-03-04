import React from "react";
import img from "/src/assets/images/tree1.png"

export default function PlantRecommend({plant, imageID}) { 
    ;
    // const notplant = "";
    const right = plant.split(',')[1];

    var i = plant.indexOf(',');

    var s = plant.substring(0, i);
    var w = plant.substring(i+2); 
    // var i2 = w.indexOf(" ");
    // var w2 = w.substring(0, i2);
    // var w3 = w.substring(i2+2);
    var link = "https://en.wikipedia.org/wiki/" + right.split(' ').filter((s) => s != "").join('_'); //+ w2 + "_" + w3; 


    return (
        <div className="plantRecommend">
            <h2>{s}</h2>
            <div><img className="plantImg" src={imageID} alt="Tree" /></div>
            <a href={link} target="_blank" rel="noopener noreferrer">{w}</a>
            {/* <h2>Cost Goes Here!</h2>
            <h2>Ease of Care Goes Here!</h2> */}
        </div>

    )
}