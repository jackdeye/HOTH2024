import React from 'react'
import PlantRecommend from "./components/PlantRecommend";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useEffect(() => {
    console.log("text changed"); 
  }, []);

  const [plant, setPlant] = useState("Recommended Plant"); 
  return (
   <div>
      <h1>Hello!</h1>
      <PlantRecommend plant="Red Oak Tree"/> 
   </div>
  )
}

export default App
