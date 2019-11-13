import React from "react";
import "../styles.css";

const Child1 = ({ isCollapseVisible, onCollapse }) => {
  return (
    <div className="child1">
      {isCollapseVisible && (
        <button onClick={onCollapse}>Collapse Fake Menu</button>
      )}
    </div>
  );
};

export default Child1;
