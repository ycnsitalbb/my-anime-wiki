import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Modal, Header } from "semantic-ui-react";
import { deleteList } from "../../actions";
const ModalDeleteList = ({ children, userId, deleteList, listId }) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      size="small"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={children}
    >
      <Modal.Header>Confirmation</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Are you sure you want to delete the list?</Header>
          <p>
            If you delete the list, all the anime in the list will also be
            removed
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          negative
          content="Delete"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {
            setOpen(false);
            deleteList(userId, listId);
          }}
        />
      </Modal.Actions>
    </Modal>
  );
};
const mapStateToProps = (state) => {
  return { userId: state.user.userId };
};
export default connect(mapStateToProps, { deleteList })(ModalDeleteList);
