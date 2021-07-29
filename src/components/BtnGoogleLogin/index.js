import React from "react";
import { connect } from "react-redux";
import { googleSignIn, signOut } from "../../actions";
import { Button } from "semantic-ui-react";
class BtnGoogleLogin extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          // dev env
          clientId:"838714323375-u277098uahp3eva2i56oiq53ptq9kv80.apps.googleusercontent.com",
          // prod env
          // clientId:"838714323375-nem7vf3up8nd56dtsqjcq505ub5ev34d.apps.googleusercontent.com",
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
      const userGoogleId = this.auth.currentUser.get().getId();
      console.log("the user is now logged in");
      this.props.googleSignIn(userGoogleId,this.auth);
    } else {
      console.log("the user is now signed out");
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
      return (
        <React.Fragment>
          <Button
            color="red"
            icon="google"
            content="Sign in with Google"
            onClick={this.onSignInClicked}
          />
        </React.Fragment>
      );
  };
  render() {
    return this.renderButton();
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.user.isSignedIn };
};
export default connect(mapStateToProps, { googleSignIn, signOut })(BtnGoogleLogin);
