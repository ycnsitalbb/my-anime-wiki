import { Button } from "bootstrap";
import React from "react";
import { connect } from "react-redux";
const BtnGoogle = ({ signInFn, signOutFn, userId }) => {
    if (userId) {
        return (
          <Button
            color="google"
            icon="google"
            content="Sign out"
            onClick={signOutFn}
          />
        );
      } else {
        return (
          <Button
            color="google"
            icon="google"
            content="Sign in with Google"
            onClick={signInFn}
          />
        );
      }
  

};
const mapStateToProps = (state) => {
  return { userId: state.user.userId };
};
export default connect(mapStateToProps)(BtnGoogle);
