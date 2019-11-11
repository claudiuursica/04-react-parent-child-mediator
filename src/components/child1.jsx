import React from "react";
import "../styles.css";

const Child1 = ({ onHover, onHoverOut }) => {
  console.log("Child1", JSON.stringify("props"));
  return (
    <div className="child1" onMouseOver={onHover} onMouseOut={onHoverOut}>
      <span>Child 1</span>
    </div>
  );
};

export default Child1;
