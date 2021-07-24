import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./style.css"
const StaffCard = ({ staff }) => {
  return (
    <Card>
      <Image src={staff.image_url}></Image>
      <Card.Content>
        <Card.Header>{staff.name}</Card.Header>
        <Card.Meta>{staff.positions}</Card.Meta>
      </Card.Content>
    </Card>
  );
};
export default StaffCard;
