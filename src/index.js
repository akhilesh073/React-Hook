import React from "react";
import ReactDOM from "react-dom";
// import Example from "./Example";
// import UseReducerHook from "./UseReducerHook";
// import UseStateDataFetching from "./UseStateDataFetching";
// import UseReducerDataFetching from "./UseReducerDataFetching";
// import UseCallBackHook from "./UseCallBackHook";
// import UseMemoHook from "./UseMemoHook";
// import UseRefHook from "./UseRefHook";
// import USeEffectHookForRefValues from "./USeEffectHookForRefValues";
// import DocTitleOne from "./DocTitleOne";
// import DocTitleTwo from "./DocTitleTwo";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hook</h1>
      <hr />
      {/* <Example /> */}
      {/* <UseReducerHook /> */}
      {/* <UseStateDataFetching /> */}
      {/* <UseReducerDataFetching /> */}
      {/* <UseCallBackHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseRefHook /> */}
      {/* <USeEffectHookForRefValues /> */}
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo /> */}
      <CounterOne />
      <CounterTwo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
