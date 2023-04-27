import React, { useState, useEffect } from "react";

function DataDisplay() {
  const [apiData, setApiData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // make a request to the API endpoint and retrieve the data
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        // save the API data in the state variable
        setApiData(data);
      });
  }, []);

  function handleSearch(event) {
    const userInput = event.target.value;
    // filter the API data based on the user input
    const filteredData = apiData.filter((item) =>
      item.name.includes(userInput)
    );
    // update the search results state variable
    setSearchResults(filteredData);
  }

  return (
    <div>
      <input type="text" onChange={handleSearch} />
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
