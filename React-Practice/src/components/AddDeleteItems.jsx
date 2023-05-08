import React, { useState } from "react";

const AddDeleteItems = () => {
  const [list, setList] = useState([]);
  const [value, setvalue] = useState("");

  const handleClick = () => {
    setList([...list, value]);
    setvalue("");
  };

  const handleDelete = (i) => {
    const filterList = list.filter((ele, idx) => idx !== i);

    setList(filterList);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
      <button onClick={handleClick}>Add to List</button>

      <hr />
      <ul>
        {list.length > 0 &&
          list.map((item, i) => {
            return (
              <li key={i} onClick={() => handleDelete(i)}>
                {item}
                {/* <button onClick={() => handleDelete(item)}>Delete</button> */}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AddDeleteItems;
