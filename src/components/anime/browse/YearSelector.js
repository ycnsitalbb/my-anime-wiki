import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Dropdown } from "semantic-ui-react";
import _ from 'lodash'
import jikan from "../../../apis/jikan";
const YearSelector = () => {
  const [archive, setArchive] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const replaceUrlParam = (url, replaceValue) => {
    return _.replace(url, /year=(all|(19|20)\d{2}$)/, `year=${replaceValue}`);
  };
  const handleChange = (e, { value }) => {
    console.log(location.search);
    if(location.search.includes("year")){
        console.log("I have found the year, now replacing it")
        let newSearch = replaceUrlParam(location.search,value)
        history.push('/browse'+newSearch)
    }else if(!!location.search){
        console.log("I haven't found the year but find other params, adding year")
        let newSearch = location.search.concat(`&year=${value}`)
        history.push('/browse'+newSearch)
    }else{
        console.log("nothing found, adding year directly")
        history.push(`/browse?year=${value}`)
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await jikan.get("/season/archive");
      setArchive(response.data.archive);
    }
    fetchData();
  }, []);
  const yearOptions = archive.map((yearArchive) => {
    return {
      key: yearArchive.year,
      value: yearArchive.year,
      text: yearArchive.year,
    };
  });
  return (
    <Dropdown
      scrolling
      placeholder="select year"
      options={yearOptions}
      onChange={handleChange}
    ></Dropdown>
  );
};
export default YearSelector;
