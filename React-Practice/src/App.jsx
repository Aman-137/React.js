import React from "react";
import Practice from "./components/Practice";
import FetchApi from "./components/FetchApi";
import DataFetching from "./components/DataFetching";
import DataPost from "./components/DataPost";
import FetchPost from "./components/FetchPost";
import DataDisplay from "./components/DataDisplay";
import CheckDelete from "./components/CheckDelete";

const App = () => {
  return (
    <div>
      <Practice />
      {/* <FetchApi /> */}
      {/* <DataFetching />
      <DataPost />
      <FetchPost /> */}

      {/* <DataDisplay /> */}
      <CheckDelete />
    </div>
  );
};

export default App;
