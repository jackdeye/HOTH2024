import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from "./components/HomePage";
import ResultsPage from './components/ResultsPage.jsx'
import AboutPage from './components/AboutPage.jsx'

function App() {
  const [zipcode, setZipcode] = useState(0);
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage setZipcode={setZipcode}/>} />
        <Route path="/results-page" element={<ResultsPage zipcode={zipcode}/>} />
        <Route path="/about-page" element={<AboutPage/>} />
      </Routes>
  </div>
  );
}

export default App;
