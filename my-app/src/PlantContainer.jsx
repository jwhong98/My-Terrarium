import React from "react";
import PlantHolder from "./PlantHolder";

function PlantContainer(props) {
    return <div>
            <PlantHolder img={props.img} />

            </div>
}

export default PlantContainer;