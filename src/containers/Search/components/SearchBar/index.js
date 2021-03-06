import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { search } from "../../../../actions";
const SearchBar = ({search}) => {
  const [term, setTerm] = useState("");
  useEffect(() => {
    let timeoutId;
    async function fetchData(){
      timeoutId= setTimeout(()=>{
        search(term,1)
      },500)
    }
    if(!!term){
      fetchData()
    }
    //This is the cleanup function
    return ()=>{
      clearTimeout(timeoutId)
    }
  }, [term,search]);

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
