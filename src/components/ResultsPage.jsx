import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {getTrees} from '../scrapePlants.js'


export default function ResultsPage(zipcode) {
    const [ trees, setTrees ] = useState([]);
    useEffect(()=>{
        getTrees(zipcode.zipcode).then((t) => setTrees(t));
    },[]);
    return (
       <div>
          
          <header>
            <h1>This is a new Page</h1>
          </header>
          <Link to='/'> Home </Link>
          <ul>{
            trees.map((plant, index) => <li key={index}>{plant}</li>)
            }</ul>

        </div>
)};