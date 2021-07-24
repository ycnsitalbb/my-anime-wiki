import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
const BrowseTopMenu = ({ byScore, byMember, byStartDate }) => {
  const [activeItem, setActiveItem] = useState(null);
  const handleClick = (name) => {setActiveItem(name)};
  return (
    <Menu text>
      <Menu.Item header>Sort By</Menu.Item>
      <Menu.Item
        name="top rated"
        active={activeItem === "top rated"}
        onClick={() => {
          handleClick("top rated");
          byScore();
        }}
      />
      <Menu.Item
        name="start date"
        active={activeItem === "start date"}
        onClick={() => {
          handleClick("start date");
          byStartDate();
        }}
      />
      <Menu.Item
        name="most members"
        active={activeItem === "most members"}
        onClick={() => {
          handleClick("most members");
          byMember();
        }}
      />
    </Menu>
  );
};
export default BrowseTopMenu;
