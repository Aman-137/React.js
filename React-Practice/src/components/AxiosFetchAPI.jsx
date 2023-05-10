import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosFetchAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <li>
              <strong>Id:</strong> {item.id}
            </li>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            <li>
              <strong>Email:</strong> {item.email}
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default AxiosFetchAPI;
