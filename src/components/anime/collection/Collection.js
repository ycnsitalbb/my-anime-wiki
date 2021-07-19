import React from 'react'
import { connect } from 'react-redux'
import MyGallery from '../../others/MyGallery'
const Collection = ({animeList})=>{
    return <MyGallery items={animeList}/>
}
const mapStateToProps = (state)=>{
    return {animeList:state.user.animeList}
}
export default connect(mapStateToProps)(Collection)