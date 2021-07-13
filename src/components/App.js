import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AnimeList from "./anime/AnimeList";
import Login from './user/Login';
import Signup from "./user/SignUp";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={AnimeList}></Route>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup}/>
      </BrowserRouter>
    );
  }
}
export default App;
