import PlantRecommend from "./PlantRecommend";

export default function ResultsPage() {
    return (
       <div >
          <header>
            <h1>This is a new Page</h1>
          </header>
            <PlantRecommend plant= "Plant 1" imageUrl="https://calscape.org/cache/0000_0000_1216_0997_th.jpeg" />
            <PlantRecommend plant= "Plant 2"/>
            <PlantRecommend plant= "Plant 3"/>
            <PlantRecommend plant= "Plant 4"/>
        </div>
)};