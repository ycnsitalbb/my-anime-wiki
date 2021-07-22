import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "./index.css"
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import reduxThunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from "./reducers";
import AppContainer from "./components/AppContainer";
import AnimeHome from "./components/anime/homepage/AnimeHome";
import AnimeBrowse from "./components/anime/browse/AnimeBrowse";
import Login from "./components/user/Login";
import Collection from "./components/anime/collection/Collection";
import AnimeDetail from "./components/anime/detail/AnimeDetail";
import AnimeSearch from "./components/anime/search/AnimeSearch";
import TopMenu from "./components/TopMenu";
import Schedule from "./components/anime/schedule/Schedule";
import BtnScrollTop from "./components/others/button/BtnScrollTop";
import Error from "./components/others/Error";
import Test from "./components/others/Test";
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
        <Switch>
          <Route path="/" exact component={AnimeHome} />
          <Route path="/browse" exact component={AnimeBrowse} />
          <Route path="/browse/genre/:genreId" exact component={AnimeBrowse} />
          <Route
            path="/browse/genre/:genreId/year/:year/season/:season"
            exact
            component={AnimeBrowse}
          />
          <Route path="/search" exact component={AnimeSearch} />
          <Route path="/login" exact component={Login} />
          <Route path="/collection" exact component={Collection} />
          <Route path="/schedule" exact component={Schedule} />
          <Route path="/anime/:mal_id" exact component={AnimeDetail} />
          <Route path="/error" exact component={Error} />
          <Route path="/test" exact component={Test} />
          <Route path="*" component={Error} />
        </Switch>
        <BtnScrollTop />
      </AppContainer>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
