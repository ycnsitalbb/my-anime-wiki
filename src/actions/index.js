import jikan from "../apis/jikan";
import server from "../apis/server";
export const googleSignIn = (userGoogleId, googleAuth) => {
  return async (dispatch) => {
    console.log(" the google auth object is" +googleAuth)
    const response = await server.post("/users/login/google", { userGoogleId });
    dispatch({
      type: "SIGN_IN_WITH_GOOGLE",
      payload: {
        googleAuth,
        userId: response.data.userId,
        animeList: response.data.animeList,
      },
    });
  };
};

export const normalSignIn = (username, password) => {
  return async (dispatch) => {
    server
      .post("/users/login/normal", {
        username,
        password,
      })
      .then((response) =>
        dispatch({
          type: "SIGN_IN",
          payload: {
            userId: response.data.userId,
            animeList: response.data.animeList,
          },
        })
      )
      .catch((error) =>
        dispatch({
          type: "SIGN_IN_FAILED",
          payload: error.response.data,
        })
      );
  };
};

export const clearLoginError = () => {
  return {
    type: "CLEAR_LOGIN_ERROR_MESSAGE",
  };
};

export const createList = (userId, listName) => {
  return async (dispatch) => {
    const response = await server.post(`/users/${userId}/animeList`, {
      listName,
    });
    dispatch({
      type: "CREATE_LIST",
      payload: { userId, animeList: response.data.animeList },
    });
  };
};
export const deleteList = (userId, listId) => {
  return async (dispatch) => {
    const response = await server.delete(
      `/users/${userId}/animeList/${listId}`
    );
    dispatch({
      type: "DELETE_LIST",
      payload: { userId, animeList: response.data.animeList },
    });
  };
};

export const addToList = (userId, listId, { mal_id, image_url, title,score }) => {
  return async (dispatch) => {
    const response = await server.post(
      `/users/${userId}/animeList/${listId}/anime`,
      {
        anime: {
          mal_id,
          image_url,
          title,
          score
        },
      }
    );
    dispatch({
      type: "ADD_TO_LIST",
      payload: { userId, animeList: response.data.animeList },
    });
  };
};

export const removeFromList = (userId, listId, mal_id) => {
  return async (dispatch) => {
    const response = await server.delete(
      `/users/${userId}/animeList/${listId}/${mal_id}`
    );
    dispatch({
      type: "REMOVE_FROM_LIST",
      payload: { userId, animeList: response.data.animeList },
    });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    if (getState().user.googleSignIn===true) {
      // logout from google api
      getState().user.googleAuth.signOut();
      console.log("signed out from google auth")
    }
    dispatch({
      type: "SIGN_OUT",
    });
  };
};

export const setSearchTerm = (term) => {
  return {
    type: "SET_SEARCH_TERM",
    payload: term,
  };
};

export const search = (term = null, page = 1, genre = null) => {
  return async (dispatch) => {
    const params = {
      q: term,
      limit: 10,
      genre: genre,
      page: page,
    };
    const response = await jikan.get("/search/anime", { params });
    dispatch({
      type: "SEARCH",
      payload: response.data.results,
    });
  };
};

export const fetchAnimeDetail = (mal_id) => {
  return async (dispatch) => {
    const response = await jikan.get(`/anime/${mal_id}`);
    dispatch({
      type: "FETCH_ANIME_DETAIL",
      payload: response.data,
    });
  };
};
