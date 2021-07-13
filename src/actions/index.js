import jikan from '../apis/jikan'
export const signIn = (userId)=>{
    return {
        type:"SIGN_IN",
        payload:userId
    }
}

export const signOut = ()=>{
    return {
        type:"SIGN_OUT"
    }
}

export const setSearchTerm = (term)=>{
    return {
        type:"SET_SEARCH_TERM",
        payload:term
    }
}

export const search = (term)=>{
    return async (dispatch)=>{
        const params = {
            q: term,
          };
        const response = await jikan.get('/search/anime',{params});
        dispatch({
            type:"SEARCH",
            payload:response.data.results
        })
    }
}