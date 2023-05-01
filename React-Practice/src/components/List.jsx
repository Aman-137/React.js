import React, { useState } from "react";

const List = ({ item, onDelete }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <li>
        <input
          type="checkbox"
          value={checked}
          onChange={(e) => setChecked(e.target.value)}
        />
        {item}
        {checked && <button onClick={onDelete}>Delete</button>}
      </li>
    </div>
  );
};

export default List;
