import React from "react";
import { Card, Header } from "semantic-ui-react";
import _ from "lodash";
import CharacterCard from "./components/CharacterCard";
import Carousel from "../../../../components/Carousel";
const Character = ({ characters }) => {
  const characterGroups = _.chunk(characters, 6);
  const cardGroups = characterGroups.map((characterGroup) => 
    <Card.Group itemsPerRow={6}>
      {characterGroup.map((character) => (
        <CharacterCard character={character} />
      ))}
    </Card.Group>
  );
  return (
    <React.Fragment>
      <Header content="Main Character" as="h2"></Header>
      <Carousel width={0.3} height={0.1} items={cardGroups}></Carousel>
    </React.Fragment>
  );
};
export default Character;
