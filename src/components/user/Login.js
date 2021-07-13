import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
class Login extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "838714323375-u277098uahp3eva2i56oiq53ptq9kv80.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // the listener passes true to the callback function when user sign in, and false when sign out
          this.auth.isSignedIn.listen(this.onSignedIn);
        });
    });
  }

  onSignedIn = (isSignedIn) => {
    if (isSignedIn) {
      const userId = this.auth.currentUser.get().getId();
      console.log("the user is now logged in");
      this.props.signIn(userId);
    } else {
      console.log("the user is now signed out");
      this.props.signOut();
    }
  };
  onSignInClicked = () => {
    console.log("the google login is clicked");
    this.auth.signIn();
  };

  onSignOutClicked = () => {
    console.log("the google sign out is clicked");
    this.auth.signOut();
  };

  renderButton = () => {
    console.log(this.props.isSignedIn);
    if (this.props.isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={this.onSignOutClicked}
        >
          <i className="google icon"></i>Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClicked}>
          <i className="google icon"></i>
          Sign in with Google
        </button>
      );
    }
  };
  render() {
    return this.renderButton();
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(Login);
