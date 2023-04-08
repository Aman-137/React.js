import React, { useState } from "react";

function App() {

  // function countInitial() {
  //   console.log("run function");
  //   return 4;
  // }

  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('blue');
  
  // passing object in useState
  //const [state, setState] = useState({count: 4, theme: 'blue'})
  // const count = state.count
  // const theme = state.theme


  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
    // setState(prevState => {
    //   return {...prevState, count: prevState.count - 1}
    // })
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
    setTheme('red')
    // setState(prevState => {
    //   return {...prevState, count: prevState.count + 1}
    // })
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
