import jikan from "../apis/jikan";
import server from "../apis/server";
export const signIn = (userId) => {
  return async (dispatch) => {
    const response = await server.post("/users", { userId });
    dispatch({
      type: "SIGN_IN",
      payload: { userId, animeList: response.data.animeList },
    });
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
    const response = await server.post(`/users/${userId}/animeList/${listId}`);
    dispatch({
      type: "DELETE_LIST",
      payload: { userId, animeList: response.data.animeList },
    });
  };
};

export const addToList = (userId, listId, { mal_id, image_url, title }) => {
  return async (dispatch) => {
    const response = await server.post(
      `/users/${userId}/animeList/${listId}/anime`,
      {
        anime: {
          mal_id,
          image_url,
          title,
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
  return {
    type: "SIGN_OUT",
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
