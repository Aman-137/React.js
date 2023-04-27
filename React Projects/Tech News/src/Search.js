import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();

  return (
    <>
      <h1>𝐓𝖊cʜ Ｎ𝓮w͎𝒔</h1>
      <form>
        <div>
          <input
            type="text"
            placeholder="search here..."
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
