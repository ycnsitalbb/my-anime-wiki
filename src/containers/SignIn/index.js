import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Divider
} from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BtnGoogleLogin from "../../components/BtnGoogleLogin";
import { normalSignIn, clearLoginError } from "../../actions";
const SignIn = ({ normalSignIn, clearLoginError, errorMessage, isSignedIn }) => {
  const history = useHistory()
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginError, setLoginError] = useState(false);
  const handleSubmit = () => {
    clearLoginError();
    normalSignIn(username, password);
  };
  useEffect(() => {
    if (errorMessage) {
      setLoginError(true);
    } else {
      setLoginError(false);
    }
  }, [errorMessage]);
  useEffect(() => {
    if(isSignedIn){
      history.push('/');
    }
  }, [isSignedIn])
  const message = loginError ? (
    <Message color="red">Invalid combination of username and password</Message>
  ) : null;
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {message}
            <Button color="teal" fluid size="large" onClick={handleSubmit}>
              Login
            </Button>
            <Divider horizontal>Or</Divider>
            <BtnGoogleLogin />
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="signup">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
const mapStateToProps = (state) => {
  return { errorMessage: state.user.errorMessage, isSignedIn:state.user.isSignedIn };
};
export default connect(mapStateToProps, { normalSignIn, clearLoginError })(
  SignIn
);
