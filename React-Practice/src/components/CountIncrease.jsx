import React, { useState } from "react";
import countContext from "./Context";
import ChildButton from "./ChildButton";

const CountIncrease = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
      <countContext.Provider value={{ count, handleIncrease, handleDecrease }}>
        <ChildButton />
        {count}
      </countContext.Provider>
    </div>
  );
};

export default CountIncrease;
