import React from "react";
import ReactDOM from "react-dom";
// import Example from "./Example";
import UseReducerHook from "./UseReducerHook";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React Hook examples</h1>
      {/* <Example /> */}
      <UseReducerHook />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
