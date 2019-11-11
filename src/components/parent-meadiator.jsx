import React, { useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";

const ParentMediator = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  console.log("ParentMediator");

  const handleChild1Hover = () => {
    console.log("Child1 Hover, affect child 2");
    setIsExpanded(!isExpanded);
  };

  const handleChild1HoverOut = () => {
    console.log("Child1 HoverOut, affect child 2 again");
    setIsExpanded(!isExpanded);
  };

  const handleCHild2ExpandCollapse = isExpanded => {
    setIsExpanded(isExpanded);
  };

  return (
    <div className="parent">
      <Child1 onHover={handleChild1Hover} onHoverOut={handleChild1HoverOut} />
      <Child2 expanded={isExpanded} onChange={handleCHild2ExpandCollapse} />
    </div>
  );
};

export default ParentMediator;
