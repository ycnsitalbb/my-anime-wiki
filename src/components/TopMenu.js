import React, { useState,useEffect } from "react";
import Login from "./user/Login";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import SearchInput from "./anime/search/SearchInput";
const TopMenu = (props) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("home");
  const handleMenuClicked = (e, { name }) => setActiveMenu(name);
  // to update the menu active status when a user jumps from anime detail page to browse page
  useEffect(() => {
    if(location.pathname.includes("browse")){
      setActiveMenu("browse")
    }
  }, [location])
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
        name="browse"
        active={activeMenu === "browse"}
        content="Browse"
        onClick={handleMenuClicked}
        as={Link}
        to="/browse"
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
      <Menu.Item content="Test" as={Link} to="/test"></Menu.Item>
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
        <SearchInput />
        <Login />
      </div>
    </Menu>
  );
};
const mapStateToProps = (state) => {
  return { isSignedIn: state.user.isSignedIn };
};
export default connect(mapStateToProps)(TopMenu);
