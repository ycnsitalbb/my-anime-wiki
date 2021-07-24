import React, { useState } from "react";
import { Button, Modal, List } from "semantic-ui-react";
import { connect } from "react-redux";
import { addToList } from "../../actions";
import BtnAddAnime from "../BtnAnime/BtnAddAnime";
const ModalAddAnime = ({
  userId,
  mal_id,
  image_url,
  title,
  score,
  addToList,
  animeList,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedListId, setSelectedListId] = useState(null);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<BtnAddAnime />}
    >
      <Modal.Header>Select a list to add anime</Modal.Header>
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
          content="Add"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {
            setOpen(false);
            addToList(userId, selectedListId, {
              mal_id: mal_id,
              image_url: image_url,
              title: title,
              score: score,
            });
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};
const mapStateToProps = (state) => {
  return { animeList: state.user.animeList};
};
export default connect(mapStateToProps, { addToList })(ModalAddAnime);
