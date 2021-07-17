import React from 'react'
import Login from './user/Login'
import {Link} from 'react-router-dom'
const TopMenu = (props)=>{
    return (
        <div className="ui secondary menu">
            <Link className={`${props.active=="home"?"active":""} item`} to="/">Home</Link>
            <Link className={`${props.active=="collection"?"active":""} item`} to="/collection">Collection</Link>
            <div className="right menu">
                <Login/>
            </div>
        </div>
    )
}
export default TopMenu