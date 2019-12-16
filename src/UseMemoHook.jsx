import React, { useState, useMemo } from "react";

const UseMemoHook = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  const isEven = useMemo(() => {
    sleep(2000);
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <div>
        <button onClick={incrementCounterOne}>CounterOne - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementCounterTwo}>CounterOne - {counterTwo}</button>
      </div>
    </div>
  );
};
export default UseMemoHook;
