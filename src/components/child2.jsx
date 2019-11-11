import React, { useState, useEffect } from "react";
import "../styles.css";

const Child2 = ({ expanded = false, onChange }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  console.log("expanded = ", expanded);

  useEffect(() => {
    console.log("Running effect with expanded: ", expanded);
    setIsExpanded(expanded);
  }, [expanded]);

  console.log("Child2 isExpanded = ", isExpanded);
  const handleOnClick = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    onChange(newState);
  };

  return (
    <div className={isExpanded ? "child2 expanded" : "child2 collapsed"}>
      <span>Child 2</span>
      <button onClick={handleOnClick}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>
    </div>
  );
};

export default Child2;
