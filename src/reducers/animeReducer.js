const INITIAL_STATE = null;
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_ANIME_DETAIL":
      return action.payload;
    case "CLEAN_ANIME_DETAIL":
      return null;
    default:
      return state;
  }
};
