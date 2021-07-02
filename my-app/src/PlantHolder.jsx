import React from "react";

const PlantHolder = (props) => {
    return <img className="plant" alt="plant" src={process.env.PUBLIC_URL + props.img} />;
}

export default PlantHolder;