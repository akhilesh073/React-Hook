import React, { memo } from "react";

const Title = () => {
  console.log("Rendering title component");
  return <h2>Use callback Hook</h2>;
};

export default memo(Title);
