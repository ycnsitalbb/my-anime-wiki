import React from "react";
import { Button } from "semantic-ui-react";
const BtnAddAnime = ({...rest}) => {
  return (
    <Button
      {...rest}
      className="button ui"
      icon="plus"
      content="LIST"
      labelPosition="left"
      primary
    />
  );
};
export default BtnAddAnime;
