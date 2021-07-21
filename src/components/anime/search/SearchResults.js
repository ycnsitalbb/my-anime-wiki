import { connect } from "react-redux";
import AnimeList from "./AnimeList";
const mapStateToProps = (state) => {
  return { animes: state.search.results };
};
export default connect(mapStateToProps)(AnimeList);
