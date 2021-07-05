import { useState, useEffect } from "react";

export default function useDraggable(el) {
  //Images starting location
  const [{ dx, dy }, setOffset] = useState({ dx: 0, dy: 0 });

  //Drop location
  const[drop, setDrop] = useState({dropX: 0, dropY: 0});

  useEffect(() => {
    const handleMouseDown = event => {

      const startX = event.pageX - drop.dropX;
      const startY = event.pageY - drop.dropY;

      let d = {x: startX, y: startY };
      
      setOffset({ dx: startX, dy: startY });
      
      const handleMouseMove = event => {
        d.x = event.pageX - startX;
        d.y = event.pageY - startY;
        console.log(d);
        setOffset({ dx: d.x, dy: d.y });
        // const newDx = event.pageX - startX;
        // const newDy = event.pageY - startY;
        // setOffset({ dx: newDx, dy: newDy });
      };

      document.addEventListener("mousemove", handleMouseMove);

      document.addEventListener(
        "mouseup",
        () => {
          setDrop({ dropX: d.x, dropY: d.y });
          document.removeEventListener("mousemove", handleMouseMove);
        }
        ,
        { once: true }
      );
    };
    console.log("CREATED");
    el.current.addEventListener("mousedown", handleMouseDown);

    return () => {
      //Cleanup
      el.current.removeEventListener("mousedown", handleMouseDown);
    };
  }, [drop]);
  // }, [dx, dy]);

  useEffect(() => {
    el.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
  }, [dx, dy]);
}
