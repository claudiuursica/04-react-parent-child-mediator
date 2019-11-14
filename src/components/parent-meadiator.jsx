import React, { useState } from "react";
import Child0 from "./child0";
import Child1 from "./child1";
import Child2 from "./child2";

const ParentMediator = () => {
  const [isChild0Expanded, setIsChild0Expanded] = useState(false);

  const handleChild1Collapse = () => {
    setIsChild0Expanded(false);
  };

  const handleChild2Expand = () => {
    setIsChild0Expanded(true);
  };

  const handleChild0ExpandCollapse = isExpanded => {
    setIsChild0Expanded(isExpanded);
  };

  return (
    <div className="parent">
      <Child0
        expanded={isChild0Expanded}
        onChange={handleChild0ExpandCollapse}
      />
      <Child1
        isCollapseVisible={isChild0Expanded}
        onCollapse={handleChild1Collapse}
      />
      <Child2
        isCollapseVisible={isChild0Expanded}
        onExpand={handleChild2Expand}
      />
    </div>
  );
};

export default ParentMediator;
