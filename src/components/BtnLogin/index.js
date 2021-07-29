import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { signOut } from "../../actions";
const BtnLogin = ({ isSignedIn,signOut }) => {
  if (!isSignedIn) {
    return <Button as={Link} to="/login" content="Login" />;
  }else{
    return <Button onClick={()=>signOut()} content="Logout"></Button>
  }
};
const mapStateToProps = (state) => {
  return { isSignedIn: state.user.isSignedIn };
};
export default connect(mapStateToProps, { signOut })(BtnLogin);
