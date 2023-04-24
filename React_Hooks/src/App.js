import React from "react";
import UseEffect from "./components/UseEffect";
import UseState from "./components/UseState";
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef";
import UseContext from "./components/UseContext";
import UseReducer from "./components/UseReducer";
import UseReducer1 from "./components/UseReducer1";
import UseCallback from "./components/UseCallback";
import CustomHooks from "./components/CustomHooks";
import UseTransition from "./components/UseTransition";
import UseDeferredValue from "./components/UseDeferredValue";

function App() {

  return (
    <>
      {/* <h3>UseState Hook</h3>
      <UseState />
      <h3>UseEffect Hook</h3>
      <UseEffect />
      <h3>UseMemo Hook</h3>
      <UseMemo /> 
      <h3>UseRef Hook</h3>
      <UseRef />
      <UseContext />
      <UseReducer />
      <UseReducer1 />

      <UseCallback />

      <CustomHooks />

      <UseTransition />*/}
      <UseDeferredValue />
    </>
  );
}

export default App;
