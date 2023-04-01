import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CHeader from './components/CHeader';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CFunctionClick from './components/CFunctionClick';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appstyle.css';
import Style from './appstyle.module.css';
import Form from './components/Form';
import Routing from './components/Routing';
import LifeCycleA from './components/LifeCycleA';
import Product from './components/Product';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Counter from './components/Counter';
import HookCounter from './components/HookCounter';
import FCounter from './components/FCounter';
import HookObject from './components/HookObject';
import HookArray from './components/HookArray';
import ClassCounterOne from './components/ClassCounterOne';
import FunctionCounterOne from './components/FunctionCounterOne';
import ClassMouse from './components/ClassMouse';
import FunctionMouse from './components/FunctionMouse';

// class component
class App extends React.Component {
  render() {
    const numbers = [3, 4, 5, 6];

    return (
      <div className='App'>

        {/*
        <h1 className={Style.success}>Green</h1>
        <h1 className='error'>Error</h1>
        
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
        <Stylesheet isvalue={false}></Stylesheet>
        <Inline />
        <Form />
        <Routing />

        <LifeCycleA />
        <Product />

        <PostList />

        <PostForm />

        <Counter />
        <FCounter />
        <HookCounter />
        <HookObject />
        <HookArray />

        <ClassCounterOne />
        <FunctionCounterOne />*/}

        <ClassMouse />
        <FunctionMouse />
        
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
