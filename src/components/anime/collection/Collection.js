import React, { useState } from "react";
import { Container, Header, Segment, Button, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import MyGallery from "../../others/MyGallery";
import ModalCreateList from "../../others/ModalCreateList";
import ModalDeleteList from "../../others/ModalDeleteList";
const Collection = ({ animeList }) => {
  const [extraList, setExtraList] = useState([]);
  const addNewList = () => {
    setExtraList([
      ...extraList,
      <Segment>
        <Header>New List</Header>
      </Segment>,
    ]);
  };
  const renderAnimeList = () => {
    return animeList.map((list) => {
      return (
        <Segment>
          <ModalDeleteList listId={list.listId}><Button>Delete List</Button></ModalDeleteList>
          <MyGallery title={list.listName} items={list.anime}></MyGallery>
        </Segment>
      );
    });
  };
  return (
    <Container>
      <Header as="h1">My collections</Header>

      <ModalCreateList><Button>Add new List</Button></ModalCreateList>

      {renderAnimeList()}
      {extraList}
    </Container>
  );
};
const mapStateToProps = (state) => {
  return { animeList: state.user.animeList };
};
export default connect(mapStateToProps)(Collection);
