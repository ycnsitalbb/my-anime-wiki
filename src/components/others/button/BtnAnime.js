import React from 'react'
import { connect } from 'react-redux'
import BtnAddAnime from './BtnAddAnime';
import BtnRemoveAnime from './BtnRemoveAnime';
const BtnAnime = ({animeId,userId,animeList,image_url,title})=>{
    if(userId){
        if(animeList.find((anime) => anime.mal_id === animeId)){
            return <BtnRemoveAnime userId={userId} animeId={animeId}/>
        }else{
            return <BtnAddAnime userId={userId} animeId={animeId} image_url={image_url} title={title} />
        }
    }else{
        return null;
    }
}
const mapStateToProps = (state)=>{
    return {animeList:state.user.animeList,userId:state.user.userId}
}
export default connect(mapStateToProps)(BtnAnime)