const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  animeList: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
        animeList: action.payload.animeList,
      };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, userId: null, animeList: [] };
    case "ADD_TO_LIST":
      return {
        ...state,
        animeList: action.payload.animeList,
      };

    case "REMOVE_FROM_LIST":
      return {
        ...state,
        animeList: action.payload.animeList,
      };
    default:
      return state;
  }
};
