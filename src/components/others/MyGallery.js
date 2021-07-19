import React from "react";
import { Grid, Container } from "semantic-ui-react";
import MyImageDimmer from "./MyImageDimmer";
const MyGallery = (props) => {
  const renderItems = () => {
    if (props.items) {
      return props.items.map((item) => {
        return (
          <Grid.Column key={item.mal_id}>
            <MyImageDimmer
              image_url={item.image_url}
              title={item.title}
              animeId={item.mal_id}
            />
          </Grid.Column>
        );
      });
    }
  };
  return (
    <Container>
      <h2>{props.title}</h2>
      <Grid relaxed>
        <Grid.Row columns={4}>{renderItems()}</Grid.Row>
      </Grid>
    </Container>
  );
};
export default MyGallery;
