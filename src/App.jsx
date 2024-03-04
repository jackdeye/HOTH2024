import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from "./components/HomePage";
import ResultsPage from './components/ResultsPage.jsx'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ResultsPage" element={<ResultsPage />} />
      </Routes>
  </div>
  );
}

export default App;
