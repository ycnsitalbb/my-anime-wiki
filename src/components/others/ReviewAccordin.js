import React, { useState } from "react";
import {
  Accordion,
  Label,
  Icon,
  Header,
  Rating,
  Grid,
  Image
} from "semantic-ui-react";
const ReviewAccordion = ({ reviews }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };
  const panels = reviews.map((review, reviewIndex) => {
    return (
      <React.Fragment>
        <Accordion.Title
          active={activeIndex === reviewIndex}
          index={reviewIndex}
          onClick={handleClick}
        >
          <Header>
            <Grid>
              <Grid.Column floated="left" width={10}>
                <Image src={review.reviewer.image_url} size="mini" floated="left"/>
                {review.reviewer.username}
              </Grid.Column>
              <Grid.Column floated="right" width={3}>
                <Rating
                  icon="star"
                  defaultRating={review.reviewer.scores.overall / 2}
                  maxRating={5}
                  disabled
                />
              </Grid.Column>
            </Grid>
          </Header>
          <Icon name="dropdown" /> Details
        </Accordion.Title>
        <Accordion.Content active={activeIndex === reviewIndex}>
          <div>
            Story:
            <Rating
              icon="star"
              defaultRating={review.reviewer.scores.story / 2}
              maxRating={5}
              disabled
            />
          </div>
          <div>
            Animation:
            <Rating
              icon="star"
              defaultRating={review.reviewer.scores.animation / 2}
              maxRating={5}
              disabled
            />
          </div>
          <div>
            Sound:
            <Rating
              icon="star"
              defaultRating={review.reviewer.scores.sound / 2}
              maxRating={5}
              disabled
            />
          </div>
          <div>
            Character:
            <Rating
              icon="star"
              defaultRating={review.reviewer.scores.character / 2}
              maxRating={5}
              disabled
            />
          </div>
          <div>
            Enjoyment:
            <Rating
              icon="star"
              defaultRating={review.reviewer.scores.enjoyment / 2}
              maxRating={5}
              disabled
            />
          </div>
          <p>{review.content}</p>
        </Accordion.Content>
      </React.Fragment>
    );
  });
  return <Accordion styled>{panels}</Accordion>;
};
export default ReviewAccordion;
