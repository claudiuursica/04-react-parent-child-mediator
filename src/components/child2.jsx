import React from "react";
import "../styles.css";

const Child2 = ({ isCollapseVisible, onExpand }) => {
  return (
    <div className="child2">
      {!isCollapseVisible && <button onClick={onExpand}>Open Fake Menu</button>}
    </div>
  );
};

export default Child2;
