import React from "react";
import ReactDOM from "react-dom";
import ParentMediator from "./components/parent-meadiator";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ParentMediator />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
