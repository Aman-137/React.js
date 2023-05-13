import React, { useState } from "react";

const options = ["cricket", "football", "hockey"];
const days = ["weekday", "weekend"];

const GameSelectChallenge = () => {
  const [game, setGame] = useState();
  const [day, setDay] = useState();

  return (
    <div>
      <h1>Which Game?</h1>
      {options.map((option, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              id="custom"
              name="games"
              value={option}
              onChange={(e) => setGame(e.target.value)}
            />
            <label htmlFor="custom">{option}</label>
            <br />
          </div>
        );
      })}
      <h1>Select day</h1>
      {days.map((day, idx) => {
        return (
          <div key={idx}>
            <input
              type="radio"
              id="custom2"
              name="days"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
            <label htmlFor="custom2">{day}</label>
            <br />
          </div>
        );
      })}
      <p>
        {game} on {day}
      </p>
    </div>
  );
};

export default GameSelectChallenge;
