import React from "react";
import { Card, Header } from "semantic-ui-react";
import _ from "lodash";
import StaffCard from "./components/StaffCard"
import Carousel from "../../../../components/Carousel";
const Staff = ({ staff }) => {
  const staffGroups = _.chunk(staff, 6);
  const cardGroups = staffGroups.map((staffGroup) => 
    <Card.Group itemsPerRow={6}>
      {staffGroup.map((staffItem) => (
        <StaffCard staff={staffItem} />
      ))}
    </Card.Group>
  );
  return (
    <React.Fragment>
      <Header content="Staff" as="h2"></Header>
      <Carousel width={0.3} height={0.1} items={cardGroups}></Carousel>
    </React.Fragment>
  );
};
export default Staff;
