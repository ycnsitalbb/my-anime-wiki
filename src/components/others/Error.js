import React from "react";
import { Link } from "react-router-dom";
import { Header, Container, Segment } from "semantic-ui-react";
const Error = () => {
  return (
    <Container>
      <Header as="h1">Sorry, something went wrong</Header>
      <Header as="h2">Please click <Link to="/">here</Link> to go to the home page</Header>
    </Container>
  );
};
export default Error;
