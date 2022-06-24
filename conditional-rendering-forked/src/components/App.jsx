import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date(2022, 6, 24, 15).getHours();
console.log(currentTime);

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

function App() {
  return (
    <div className="container">
      {
        // Ternary Operator

        //isLoggedIn ? <h1>Hello</h1> : <Login />

        // AND Operator

        currentTime > 12 && <h1>Why are you still working?</h1>
      }
    </div>
  );
}

export default App;
