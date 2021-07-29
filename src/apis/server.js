import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3001",
  //baseURL: "https://afternoon-anchorage-32165.herokuapp.com/"
});
