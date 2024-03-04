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
          </header>
          <Link to='/'> Home </Link>
          {trees.map((plantInput, index) => <PlantRecommend plant={plantInput}/>)}
        </div>
)};