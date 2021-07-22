import React from 'react'
import _ from 'lodash'
import { Dropdown } from 'semantic-ui-react'
import { useLocation,useHistory } from 'react-router'
const SeasonSelector = ()=>{
    const history = useHistory()
    const location = useLocation()
    const replaceUrlParam = (url,replaceValue)=>{
        return _.replace(url,/season=(all|spring|summer|fall|winter)/,`season=${replaceValue}`)
    }
    const handleChange = (e,{value})=>{
        console.log(location.search)
        if(location.search.includes("season")){
            console.log("I have found the season, now replacing it")
            let newSearch = replaceUrlParam(location.search,value)
            history.push('/browse'+newSearch)
        }else if(!!location.search){
            console.log("I haven't found the season but find other params, adding season")
            let newSearch = location.search.concat(`&season=${value}`)
            history.push('/browse'+newSearch)
        }else{
            console.log("nothing found, adding season directly")
            history.push(`/browse?season=${value}`)
        }
    }
    const seasonOptions = [
        {key:"all",value:"all",text:"All"},
        {key:"spring", value:"spring", text:"Spring"},
        {key:"summer", value:"summer", text:"Summer"},
        {key:"fall", value:"fall", text:"Fall"},
        {key:"winter", value:"winter", text:"Winter"}
    ]
    return <Dropdown placeholder="select season" options={seasonOptions} onChange={handleChange}></Dropdown>
}
export default SeasonSelector