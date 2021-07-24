import React from "react";
import { Container, Dimmer, Loader, Segment } from "semantic-ui-react";
import './style.css'
const Spinner = () => {
  return (
    <Container>
      <Segment>
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      </Segment>
    </Container>
  );
};
export default Spinner;
