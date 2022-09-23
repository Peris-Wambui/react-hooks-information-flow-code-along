import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  // create a variable to keep track of the color of the Child components using state:
  const [childrenColor, setChildrenColor] = useState("#FFF");

  // To update state, 
  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;

// When the div in the Child component is clicked, it will use the onChangeColor variable to determine what function to run
// onChangeColor is a prop that is passed down from the Parent component, which references the handleChangeColor function
// The handleChangeColor function is the function that will actually run when the div is clicked, and will update state in the Parent component
