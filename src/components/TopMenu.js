import React, { useState } from "react";
import Login from "./user/Login";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
const TopMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState("home");
  const handleMenuClicked = (e, { name }) => setActiveMenu(name);
  return (
    <Menu>
        <Menu.Item
          name="home"
          active={activeMenu === "home"}
          content="Home"
          onClick={handleMenuClicked}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="search"
          active={activeMenu === "search"}
          content="Search"
          onClick={handleMenuClicked}
          as={Link}
          to="/search"
        />
        <Menu.Item
          name="schedule"
          active={activeMenu === "schedule"}
          content="Schedule"
          onClick={handleMenuClicked}
          as={Link}
          to="/schedule"
        />
      {props.isSignedIn ? (
          <Menu.Item
            name="collection"
            active={activeMenu === "collection"}
            content="Collection"
            onClick={handleMenuClicked}
            as={Link}
          to="/collection"
          />
      ) : null}
      <div className="right menu">
        <Login />
      </div>
    </Menu>
  );
};
const mapStateToProps = (state) => {
  return { isSignedIn: state.user.isSignedIn };
};
export default connect(mapStateToProps)(TopMenu);
