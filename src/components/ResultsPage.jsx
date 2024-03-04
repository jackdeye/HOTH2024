import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {getTrees} from '../scrapePlants.js'
import PlantRecommend from "./PlantRecommend";


export default function ResultsPage(zipcode) {
    const [ trees, setTrees ] = useState([]);
    useEffect(()=>{
        getTrees(zipcode.zipcode).then((t) => setTrees(t));
    },[]);
    return (
       <div>
          
          <header>
            <h1>Your Plant Results!</h1>
            <Link to='/'> Home </Link>
          </header>
          {trees.map((plantInput, index) => <PlantRecommend plant={plantInput.name} imageID={plantInput.img}/>)}

        </div>
)};