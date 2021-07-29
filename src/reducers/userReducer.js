const INITIAL_STATE = {
  isSignedIn: null,
  googleSignIn: null,
  googleAuth: null,
  errorMessage: null,
  userId: null,
  animeList: [],
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        googleSignIn: false,
        isSignedIn: true,
        userId: action.payload.userId,
        animeList: action.payload.animeList,
      };
    case "SIGN_IN_WITH_GOOGLE":
      return {
        ...state,
        googleSignIn: true,
        googleAuth: action.payload.googleAuth,
        isSignedIn: true,
        userId: action.payload.userId,
        animeList: action.payload.animeList,
      };
    case "SIGN_IN_FAILED":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "CLEAR_LOGIN_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: null,
      };
    case "SIGN_OUT":
      return {
        ...state,
        googleAuth: null,
        isSignedIn: false,
        userId: null,
        animeList: [],
      };
    case "CREATE_LIST": {
      return { ...state, animeList: action.payload.animeList };
    }
    case "DELETE_LIST": {
      return { ...state, animeList: action.payload.animeList };
    }
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
export default userReducer;
