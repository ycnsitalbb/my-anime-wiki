import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Modal, Input } from "semantic-ui-react";
import { createList } from "../../actions";
const ModalAddList = ({ children, userId, createList }) => {
  const [newListName, setNewListName] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <Modal
      size="small"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={children}
    >
      <Modal.Header>Create a new list</Modal.Header>
      <Modal.Content>
        <Input
          placeholder="Enter list name"
          onChange={(e) => setNewListName(e.target.value)}
        ></Input>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Add"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {
            setOpen(false);
            createList(userId,newListName);
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};
const mapStateToProps = (state) => {
  return { userId: state.user.userId };
};
export default connect(mapStateToProps, { createList })(ModalAddList);
