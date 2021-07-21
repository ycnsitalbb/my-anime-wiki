import React, { useState } from "react";
import { Input,Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { search } from "../../../actions";
import { useLocation } from "react-router";
const SearchInput = (props) => {
  const [input, setInput] = useState("");
  let location = useLocation();
  if(location.pathname==='/'){
    return (
        <Input
          action={<Button content="Search"  as={Link} to="/search" onClick={()=>props.search(input,1,null)} />}
          placeholder="Search..."
          onChange={(e)=>{setInput(e.target.value)}}
          value={input}
        />
      );
  }else{
      return null;
  }
  
};
export default connect(null,{search})(SearchInput)