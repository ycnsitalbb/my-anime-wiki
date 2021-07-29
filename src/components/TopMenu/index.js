import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Portal } from "semantic-ui-react";
import BtnLogin from "../BtnLogin";
const TopMenu = (props) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("home");
  const handleMenuClicked = (e, { name }) => setActiveMenu(name);
  // to update the menu active status when a user jumps from anime detail page to browse page
  useEffect(() => {
    if (location.pathname.includes("browse")) {
      setActiveMenu("browse");
    }
  }, [location]);
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

      <Menu.Item
        name="collection"
        active={activeMenu === "collection"}
        content="Collection"
        onClick={handleMenuClicked}
        as={Link}
        to="/collection"
      />

      <Menu.Item
        name="community"
        active={activeMenu === "community"}
        content="Community"
        onClick={handleMenuClicked}
        as={Link}
        to="/community"
      />

      <div className="right menu">
        <BtnLogin></BtnLogin>
      </div>
    </Menu>
  );
};
const mapStateToProps = (state) => {
  return { isSignedIn: state.user.isSignedIn };
};
export default connect(mapStateToProps)(TopMenu);
