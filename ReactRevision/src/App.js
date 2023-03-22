import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CHeader from './components/CHeader';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CFunctionClick from './components/CFunctionClick';

// class component
class App extends React.Component {
  render() {
    const numbers = [3, 4, 5, 6];

    return (
      <div className='App'>
        <Header name="Aman" last="Kumar">
          <p>Aman is a good boy</p>
        </Header>
        <Header name="Saket" last="Kumar">
          <a href='https://legacy.reactjs.org/docs/getting-started.html'>Click me</a>
        </Header>
        <Header name="Sunny" last="Singh"/>

        <CHeader name="Prithvi" last="Raj"/>
        <Channel />
        <FunctionClick />
        <CFunctionClick roll="22" numbers={numbers}/>
      </div>
    )
  }
}

/* // Functional component
// using jsx
const name = <span>Hello React</span>;
// without using jsx
const newElement = React.createElement('h2', {className:"newElement"}, "Hello h2 tag");

const test = () => {
  alert("hello aman!");
}
const age = function(a) {
  if (a > 18) {
    return <span>You are eligible</span>
  } else {
    return <span>You are not eligible</span>
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello Aman, {name}</h1>
      {newElement}
      <button style={{ background: 'yellow' }} onClick={test} >Click Me</button>
      <br/>
      {age(17)}

    </div>
  );
}
*/
export default App;
