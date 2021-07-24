import _ from "lodash";
import { Image, Header } from "semantic-ui-react";
import React from "react";
import Carousel from "../../../../components/Carousel";
import PictureModal from "./components/PictureModal";
const Picture = ({ pictures }) => {
  const pictureGroups = _.chunk(pictures, 7).map((group) => (
    <Image.Group size="small">
      {group.map((picture) => (
        <PictureModal image_url={picture.large}>
          <Image bordered src={picture.small} />
        </PictureModal>
      ))}
    </Image.Group>
  ));
  return (
    <React.Fragment>
      <Header content="Pictures" as="h2" />
      <Carousel items={pictureGroups} />
    </React.Fragment>
  );
};
export default Picture;
