import React, {useRef} from "react";
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

const createHolder = (plant) => {
  return (
      <PlantHolder className="plantHolder" key={plant.id} img={plant.imgURL}/>  
  );
}

// const dragElement = (plant) => {
//     //set 4 positions for positioning on the screen
//     let pos1 = 0,
//     pos2 = 0,
//     pos3 = 0,
//     pos4 = 0;
//     plant.onpointerdown = pointerDrag;

//     function pointerDrag(e) {
//       e.preventDefault();
//       console.log(e);
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onpointermove = elementDrag;
//       document.onpointerup = stopElementDrag;
//     }

//     function elementDrag(e) {
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       console.log(pos1, pos2, pos3, pos4);
//       plant.style.top = plant.offsetTop - pos2 + 'px';
//       plant.style.left = plant.offsetLeft - pos1 + 'px';
//     }

//     function stopElementDrag() {
//       document.onpointerup = null;
//       document.onpointermove = null;
//     }
// }

const App = () => {
  return (
    <div>
      <h1 className="heading">My Terrarium</h1>
      <div id="left" className="container">
      {leftPlants.map(createHolder)}
      </div>
      <div id="right" className="container">
      {rightPlants.map(createHolder)}
      </div>
    </div>
  );
}

export default App;
