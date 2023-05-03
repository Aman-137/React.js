import React, { useState } from "react";

const DltDataFromArr = () => {
  const arr = [
    { id: 1, username: "Aman" },
    { id: 2, username: "Saket" },
    { id: 3, username: "Sunny" },
    { id: 4, username: "Prithvi" },
    { id: 5, username: "Anmo" },
    { id: 6, username: "Mukund" },
    { id: 7, username: "Loku" },
    { id: 8, username: "Billu" },
    { id: 9, username: "Gopal" },
  ];

  const [data, setData] = useState(arr);

  const handleDelete = (idx) => {
    const filteredData = data.filter((item, i) => i !== idx);

    setData(filteredData);
  };

  return (
    <div>
      {data.map((item, idx) => {
        return (
          <li key={item.id}>
            {item.username}
            <button onClick={() => handleDelete(idx)}>Delete</button>
          </li>
        );
      })}
    </div>
  );
};
export default DltDataFromArr;
