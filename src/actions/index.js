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

export const addToList = (userId,anime) =>{
  return async (dispatch)=>{
    const response = await server.post(`/users/${userId}/animeList`,{anime})
    dispatch({
      type:"ADD_TO_LIST",
      payload:{userId, animeList:response.data.animeList}
    })
  }
}

export const removeFromList = (userId,animeId) =>{
  return async (dispatch)=>{
    const response = await server.delete(`/users/${userId}/animeList/${animeId}`,{userId,animeId})
    dispatch({
      type:"REMOVE_FROM_LIST",
      payload:{userId, animeList:response.data.animeList}
    })
  }
}

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

export const search = (term) => {
  return async (dispatch) => {
    const params = {
      q: term,
    };
    const response = await jikan.get("/search/anime", { params });
    dispatch({
      type: "SEARCH",
      payload: response.data.results,
    });
  };
};
