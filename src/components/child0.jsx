import React, { useState, useEffect } from "react";
import "../styles.css";

const Child0 = ({ expanded = false, onChange }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  useEffect(() => {
    setIsExpanded(expanded);
  }, [expanded]);

  const handleOnClick = () => {
    const newValue = !isExpanded;
    setIsExpanded(newValue);
    onChange(newValue);
  };

  return (
    <div className={isExpanded ? "child0 expanded" : "child0 collapsed"}>
      <button onClick={handleOnClick}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>
      <div>Fake Menu</div>
    </div>
  );
};

export default Child0;
