import React from "react";

// let source = "./images/plant";
// let ext = ".png";

function PlantHolder(props) {
    return <img className="plant" alt="plant" src={process.env.PUBLIC_URL + props.img} />;
}

export default PlantHolder;