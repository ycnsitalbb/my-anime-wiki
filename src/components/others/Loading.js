import React from "react";
const Loading = () => {
  return (
    <div className="ui segment">
      <p>Loading</p>
      <div className="ui active dimmer">
        <div className="ui loader"></div>
      </div>
    </div>
  );
};
export default Loading
