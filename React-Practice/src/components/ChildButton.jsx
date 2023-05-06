import React, { useContext } from "react";
import countContext from "./Context";

const ChildButton = () => {
  const { handleIncrease, handleDecrease } = useContext(countContext);
  return (
    <div style={{ display: "flex" }}>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default ChildButton;
