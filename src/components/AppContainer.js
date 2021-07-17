import { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { cleanAnimeDetail } from "../actions";
class App extends Component {
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("on route change");
    //   console.log(this.props)
    //   if(this.props.anime){
    //     this.props.cleanAnimeDetail();
    //   }
      
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}
const mapStateToProps = (state)=>{
    return {anime:state.anime}
}
export default withRouter(connect(mapStateToProps,cleanAnimeDetail)(App));
