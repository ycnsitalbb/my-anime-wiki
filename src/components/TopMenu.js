import React from 'react'
import Login from './user/Login'
const TopMenu = ()=>{
    return (
        <div className="ui secondary menu">
            <a className="active item">Home</a>
            <a className="item">Collection</a>
            <div className="right menu">
                <Login/>
            </div>
        </div>
    )
}
export default TopMenu