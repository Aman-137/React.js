import React from "react";

import { useState } from "react";
const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "USA", value: "US", cities: ["California", "Chicago"] },
  { name: "Spain", value: "SP", cities: ["Madrid", "Barcelona"] },
];

const DropDownChallenge = () => {
  const [country, setCountry] = useState({ name: "", value: "", cities: [] });

  return (
    <div>
      <select
        value={country}
        onChange={(e) => {
          // console.log(e.target.value);
          setCountry(e.target.value);
        }}
      >
        {countries.map((item, idx) => {
          return (
            <option value={idx} key={idx}>
              {item.name}
            </option>
          );
        })}
      </select>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        {countries[country]?.cities?.map((item, idx) => {
          return (
            <option value={idx} key={idx}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDownChallenge;
