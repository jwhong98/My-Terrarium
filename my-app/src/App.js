import React from "react";
import PlantContainer from "./PlantContainer";
import PlantHolder from "./PlantHolder";
import Terrarium from "./Terrarium";
import plants from "./plants";

//check out reducer on react

const leftPlants = plants.filter( plant => {
  return plant.id < 8
});

const rightPlants = plants.filter(plant => {
  return plant.id > 7
});

const createContainer = (plant) => {
  return (
        <PlantContainer className="container" key={plant.id} img={plant.imgURL}/>
    
  );
}

const App = () => {
  return (
    <div>
      <h1 className="heading">My Terrarium</h1>
      {leftPlants.map(createContainer)}
      {rightPlants.map(createContainer)}
    </div>
  );
}

export default App;
