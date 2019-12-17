import React, { useState } from "react";
import useDocTitle from "./hooks/useDocTitle";

const DocTitleTwo = () => {
  const [count, setCount] = useState(0);
  useDocTitle(count);
  return <button onClick={() => setCount(count + 1)}>count - {count}</button>;
};
export default DocTitleTwo;
