import { connect } from "react-redux";
import AnimeContent from "../AnimeContent";
const mapStateToProps = (state) => {
  return { anime: state.anime };
};
export default connect(mapStateToProps)(AnimeContent);