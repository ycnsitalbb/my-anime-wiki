import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AnimeSearch from "./anime/AnimeSearch";
import UserAnimeList from "./anime/UserAnimeList";
import Login from './user/Login';
import Signup from "./user/SignUp";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={AnimeSearch}></Route>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup}/>
        <Route path="/collection" exact component={UserAnimeList}/>
      </BrowserRouter>
    );
  }
}
export default App;
