import React from "react";
import { Button } from "semantic-ui-react";
const BtnRemoveAnime = ({...rest}) => {
  return (
    <Button
      {...rest}
      icon="minus"
      content="REMOVE"
      labelPosition="left"
      negative
    />
  );
};
export default BtnRemoveAnime;
