import React from "react";
import ReactDOM from "react-dom";
// import Example from "./Example";
// import UseReducerHook from "./UseReducerHook";
import UseStateDataFetching from "./UseStateDataFetching";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React Hook examples</h1>
      <hr />
      {/* <Example /> */}
      {/* <UseReducerHook /> */}
      <UseStateDataFetching />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
