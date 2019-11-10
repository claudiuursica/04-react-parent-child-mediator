import Child1 from "./child1";
import Child2 from "./child2";

const Parent = props => {
  console.log("Parent", JSON.stringify(props));
  const handleChild1Hover = () => console.log("Child1 Hover");
  const handleChild1HoverOut = () => console.log("Child1 Hover Out");
  const handleChild2Hover = () => console.log("Child2 Hover");
  const handleChild2HoverOut = () => console.log("Child2 Hover Out");

  return (
    <div>
      <Child1 onHover={handleChild1Hover} onHoverOut={handleChild1HoverOut} />
      <Child2 />
    </div>
  );
};

export default Parent;
