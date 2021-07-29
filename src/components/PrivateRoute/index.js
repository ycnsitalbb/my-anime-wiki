import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, isSignedIn, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isSignedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
const mapStateToProps = (state)=>{
    return {isSignedIn:state.user.isSignedIn }
}
export default connect(mapStateToProps)(PrivateRoute);
