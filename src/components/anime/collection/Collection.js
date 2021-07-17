import { connect } from "react-redux";
import AnimeList from "../AnimeList";
const mapStateToProps = (state) => {
  return { animes: state.user.animeList };
};
export default connect(mapStateToProps)(AnimeList);
