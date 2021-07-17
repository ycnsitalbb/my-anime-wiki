import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import reduxThunk from "redux-thunk";
import { BrowserRouter,Route } from "react-router-dom";

import reducers from "./reducers";
import AppContainer from "./components/AppContainer";
import Login from "./components/user/Login";
import UserAnimeList from "./components/anime/UserAnimeList"
import AnimeDetail from "./components/anime/detail/AnimeDetail"
import AnimeSearch from "./components/anime/AnimeSearch"
import TopMenu from "./components/TopMenu";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer>
        <TopMenu />
        <Route path="/" exact component={AnimeSearch}></Route>
        <Route path="/login" exact component={Login} />
        <Route path="/collection" exact component={UserAnimeList} />
        <Route path="/anime/:animeId" exact component={AnimeDetail} />
      </AppContainer>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
