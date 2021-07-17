import React from "react";
import TopMenu from "../TopMenu";
import Collection from "./collection/Collection";
const UserAnimeList = () => {
  return (
    <div>
      <TopMenu active="collection"/>
      <Collection />
    </div>
  );
};
export default UserAnimeList;
