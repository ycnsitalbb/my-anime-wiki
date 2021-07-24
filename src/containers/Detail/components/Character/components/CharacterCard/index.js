import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./style.css"
const CharacterCard = ({ character }) => {
  console.log(character)
  return (
    <Card>
      <Image src={character.image_url}></Image>
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>Voice Actor: {character.voice_actors.length>0?character.voice_actors[0].name:"N/A"}</Card.Meta>
      </Card.Content>
    </Card>
  );
};
export default CharacterCard;
