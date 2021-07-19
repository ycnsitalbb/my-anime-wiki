import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import reduxThunk from "redux-thunk";
import { BrowserRouter,Route } from "react-router-dom";

import reducers from "./reducers";
import AppContainer from "./components/AppContainer";
import AnimeHome from "./components/anime/homepage/AnimeHome";
import Login from "./components/user/Login";
import Collection from "./components/anime/collection/Collection"
import AnimeDetail from "./components/anime/detail/AnimeDetail"
import AnimeSearch from "./components/anime/search/AnimeSearch"
import TopMenu from "./components/TopMenu";
import Schedule from "./components/anime/schedule/Schedule";
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
        <Route path="/" exact component={AnimeHome} />
        <Route path="/search" exact component={AnimeSearch} />
        <Route path="/login" exact component={Login} />
        <Route path="/collection" exact component={Collection} />
        <Route path="/schedule" exact component={Schedule} />
        <Route path="/anime/:animeId" exact component={AnimeDetail} />
      </AppContainer>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
