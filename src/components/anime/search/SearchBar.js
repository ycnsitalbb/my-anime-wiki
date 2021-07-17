import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { search } from "../../../actions";
const SearchBar = (props) => {
  const [term, setTerm] = useState("attack on titan");
  useEffect(() => {
    let timeoutId;
    (async () => {
      timeoutId= setTimeout(()=>{
        props.search(term)
      },500)
    })();
    //This is the cleanup function
    return ()=>{
      clearTimeout(timeoutId)
    }
  }, [term]);

  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="field">
          <label>Search Anime</label>
          <input
            className="input"
            type="text"
            placeholder="Enter anime name"
            value={term}
            onChange={(e)=>setTerm(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};
export default connect(null,{search})(SearchBar);
