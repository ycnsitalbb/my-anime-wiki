import { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
class App extends Component {
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("on route change");

      
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
export default withRouter(connect(mapStateToProps)(App));
