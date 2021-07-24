import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import reduxThunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from "./reducers";
import Home from "./containers/Home";
import Search from "./containers/Search";
import Detail from "./containers/Detail";
import Collection from "./containers/Collection";
import Schedule from "./containers/Schedule";
import Error from "./containers/Error";
import Browse from "./containers/Browse";
import Test from "./containers/Test";

import TopMenu from './components/TopMenu'
import BtnScrollTop from './components/BtnScrollToTop'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <TopMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/browse" exact component={Browse} />
        <Route path="/search" exact component={Search} />
        <Route path="/collection" exact component={Collection} />
        <Route path="/schedule" exact component={Schedule} />
        <Route path="/anime/:mal_id" exact component={Detail} />
        <Route path="/test" exact component={Test} />
        <Route path="/error" exact component={Error} />
        <Route path="*" component={Error} />
      </Switch>
      <BtnScrollTop />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
