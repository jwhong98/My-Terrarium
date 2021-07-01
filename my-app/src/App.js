import React, { Component } from "react";
import PlantContainer from "./PlantContainer";
import PlantHolder from "./PlantHolder";
import Terrarium from "./Terrarium";
import plants from "./plants";

function createContainer(plant) {
  return (
        <PlantContainer className="container left" key={plant.id} img={plant.imgURL}/>
    
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Terrarium</h1>
      <img alt="plant1" src={process.env.PUBLIC_URL + "assets/images/plant1.png"}/>
      {plants.map(createContainer)}
    </div>
  );
}

export default App;
