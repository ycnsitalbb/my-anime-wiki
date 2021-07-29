import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Form,
  Header,
  Message,
  Segment,
  Input,
  Container,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import server from "../../apis/server";
const SignUp = () => {
  const history = useHistory()
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmedPassword, setConfirmedPassword] = useState(null);
  const handleSubmit = async () => {
    console.log("the form is submitted");
    await server.post("/users/signup", { username, password, email });
    history.push("/login")
  };

  const passwordMatch = password === confirmedPassword;
  const passwordMatcher = passwordMatch
    ? null
    : {
        content: "Password mismatch",
        pointing: "below",
      };
  const submitChecker = !!username && !!password && passwordMatch;
  return (
    <Container>
      <Header as="h2" color="teal" textAlign="left">
        Create a new account
      </Header>
      <Form size="small" onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Field required>
            <label>Username</label>
            <Input
              id="username"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            ></Input>
          </Form.Field>
          <Form.Field>
            <label>Email Address</label>
            <Input
              id="email"
              placeholder="Enter email address"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </Form.Field>
          <Form.Field required>
            <label>Password</label>
            <Input
              id="password"
              placeholder="Enter your password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </Form.Field>
          <Form.Field required>
            <label>Confirm password</label>
            <Form.Input
              placeholder="Confirm your password"
              type="password"
              error={passwordMatcher}
              onChange={(e) => setConfirmedPassword(e.target.value)}
            ></Form.Input>
          </Form.Field>

          <Button
            color="teal"
            fluid
            size="large"
            type="submit"
            disabled={!submitChecker}
          >
            Sign Up
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <Link to="login">Sign In</Link>
      </Message>
    </Container>
  );
};

export default SignUp;
