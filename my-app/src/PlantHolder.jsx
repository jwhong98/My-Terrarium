import React, {useRef} from "react";
import useDraggable from "./useDraggable";

const PlantHolder = (props) => {
    const cardRef = useRef(null);
    useDraggable(cardRef);

    return <img ref={cardRef} className="plant" alt="plant" src={process.env.PUBLIC_URL + props.img} />;
}

export default PlantHolder;