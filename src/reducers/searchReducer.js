const INITIAL_STATE = {
  searchTerm: null,
  searchResults: []
};

const searchReducer =  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "SEARCH":
      return {...state, results:action.payload};
    default:
      return state;
  }
};
export default searchReducer