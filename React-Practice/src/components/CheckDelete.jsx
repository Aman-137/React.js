import React, { useState } from "react";
import List from "./List";

const CheckDelete = () => {
  const arr = ["play football", "play cricket", "california", "google"];
  const [arr1, setArr1] = useState(arr);

  const handleDelete = (idx) => {
    const filteredArr = arr1.filter((item, i) => i !== idx);
    setArr1(filteredArr);
  };
  return (
    <>
      {arr1.map((item, i) => (
        <List item={item} onDelete={() => handleDelete(i)} key={item} />
      ))}
    </>
  );
};

export default CheckDelete;
