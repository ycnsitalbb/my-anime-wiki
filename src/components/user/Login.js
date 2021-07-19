import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
import { Button } from "semantic-ui-react";
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
          this.onAuthChange(this.auth.isSignedIn.get());
          // the listener will trigger the callback function when user status changed
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
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
        <React.Fragment>
          <p>Hello {this.auth.currentUser.get().getBasicProfile().getName()}</p>
          <button
            className="ui red google button"
            onClick={this.onSignOutClicked}
          >
            <i className="google icon"></i>Sign Out
          </button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <p>To unlock more functionalities, please login</p>
          <Button
            color="red google"
            icon="google"
            content="Sign in with Google"
            onClick={this.onSignInClicked}
          />
        </React.Fragment>
      );
    }
  };
  render() {
    return this.renderButton();
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.user.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(Login);
