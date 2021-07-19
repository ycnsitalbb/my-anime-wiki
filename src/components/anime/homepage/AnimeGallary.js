import React, { useState, useEffect } from 'react'
import jikan from '../../../apis/jikan'
import MyGallery from '../../others/MyGallery'
const AnimeGallery = (props)=>{
    const [animes,setAnimes] = useState([])
    useEffect(() => {
        async function fetchData(){
            const response = await jikan.get(props.resourceURL)
            setAnimes(response.data.anime)
        }
       fetchData();
    }, [])
    return(<MyGallery items={animes} title={props.title}></MyGallery>)
}
export default AnimeGallery