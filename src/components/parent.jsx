import Child1 from "./child1";

const Parent = props => {
  console.log("Parent", JSON.stringify(props));
  return (
    <div>
      <Child1 />
    </div>
  );
};

export default Parent;
