import React, { useState } from "react";
import { Button, Modal, List } from "semantic-ui-react";
import { connect } from "react-redux";
import { removeFromList } from "../../actions";
import BtnRemoveAnime from "./button/BtnRemoveAnime";
const ModalRemoveAnime = ({
  userId,
  mal_id,
  animeList,
  removeFromList
}) => {
  const [open, setOpen] = useState(false);
  const [selectedListId, setSelectedListId] = useState(null);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<BtnRemoveAnime />}
    >
      <Modal.Header>Select a list to remove anime</Modal.Header>
      <Modal.Content>
        <List selection>
          {animeList.map((list) => (
            <List.Item
              active={selectedListId === list.listId}
              onClick={() => setSelectedListId(list.listId)}
            >
              {list.listName}
            </List.Item>
          ))}
        </List>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          content="Remove"
          onClick={() => {
            setOpen(false);
            removeFromList(userId, selectedListId,mal_id);
          }}
          negative
        />
      </Modal.Actions>
    </Modal>
  );
};
const mapStateToProps = (state) => {
  return { animeList: state.user.animeList};
};
export default connect(mapStateToProps, { removeFromList })(ModalRemoveAnime);
