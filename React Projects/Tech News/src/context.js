// context creation ✅
// provider ✅
// consumer (lengthy) - removed
// useContext Hook ✅

import React, { useEffect, useReducer, useContext } from "react";
import reducer from "./reducer";

const API = "https://hn.algolia.com/api/v1/search?";

export const ACTIONS = {
  SET_LOADING: "SET_LOADING",
  GET_STORIES: "GET_STORIES",
  REMOVE_POST: "REMOVE_POST",
  SEARCH_QUERY: "SEARCH_QUERY",
  PREV_PAGE: "PREV_PAGE",
  NEXT_PAGE: "NEXT_PAGE",
};

const initialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = React.createContext();

// to create a provider function
const AppProvider = ({ children }) => {
  //const [state, setState] = useState(initialState)

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: ACTIONS.SET_LOADING });

    try {
      const res = await fetch(url);
      const data = await res.json();
      //console.log(data);

      dispatch({
        type: ACTIONS.GET_STORIES,
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // to remove the post
  const removePost = (post_ID) => {
    dispatch({ type: ACTIONS.REMOVE_POST, payload: post_ID });
  };

  // search
  const searchPost = (searchQuery) => {
    dispatch({ type: ACTIONS.SEARCH_QUERY, payload: searchQuery });
  };

  // pagination
  const getNextPage = () => {
    dispatch({ type: ACTIONS.NEXT_PAGE });
  };

  const getPrevPage = () => {
    dispatch({ type: ACTIONS.PREV_PAGE });
  };

  // to call the api func
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook create
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
