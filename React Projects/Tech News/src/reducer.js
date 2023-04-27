import { ACTIONS } from "./context";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case ACTIONS.GET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case ACTIONS.REMOVE_POST:
      return {
        ...state,
        hits: state.hits.filter(
          (curElem) => curElem.objectID !== action.payload
        ),
      };

    case ACTIONS.SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    case ACTIONS.NEXT_PAGE:
      let pageNumInc = state.page + 1;
      if (pageNumInc >= state.nbPages) {
        pageNumInc = 0;
      }
      return {
        ...state,
        page: pageNumInc,
      };

    case ACTIONS.PREV_PAGE:
      let pageNum = state.page - 1;
      if (pageNum <= 0) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNum,
      };

    default:
      return state;
  }
};

export default reducer;
