import React from "react";
import PlantHolder from "./PlantHolder";

const PlantContainer = (props) => {
    return <PlantHolder className="plantHolder" img={props.img} />      
}

export default PlantContainer;