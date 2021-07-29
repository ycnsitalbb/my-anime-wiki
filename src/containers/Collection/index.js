import React from "react";
import { Container, Header, Segment, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import AnimeGallery from "../../components/AnimeGallery";
import ModalAddList from "../../components/ModalAddList";
import ModalDeleteList from "../../components/ModalDeleteList";
const Collection = ({ animeList }) => {
  const renderAnimeList = () => {
    return animeList.map((list, index) => {
      return (
        <Segment key={index}>
          <Header>List: {list.listName}</Header>
          <ModalDeleteList listId={list.listId}>
            <Button floated="right">Delete List</Button>
          </ModalDeleteList>
          <AnimeGallery title={list.listName} items={list.anime}></AnimeGallery>
        </Segment>
      );
    });
  };
  return (
    <Container>
      <Header as="h1">My Collections</Header>
      <ModalAddList>
        <Button>Add New List</Button>
      </ModalAddList>
      {renderAnimeList()}
    </Container>
  );
};
const mapStateToProps = (state) => {
  return { animeList: state.user.animeList };
};
export default connect(mapStateToProps)(Collection);
