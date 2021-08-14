import { SEARCH_START, SEARCH_COMPLETE, SEARCH_FAILED } from "./types";

const initialState = {
  searchResult: [],
  isLoading: false,
};

export default searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        isLoading: true,
      };

    case SEARCH_COMPLETE:
      return {
        isLoading: false,
        searchResult: action.payload,
      };

    case SEARCH_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
