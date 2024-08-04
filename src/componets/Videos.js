import React,{useEffect, useState} from 'react'
import {YOUTUBE_VIDEO_API} from '../utils/constants'
import Videocard, { AdVideoCard } from './Videocard';
import { Link } from 'react-router-dom';

const Videos = () => {
  const [videos,setVideos]=useState([]);
      useEffect(()=>{
               getVideos();
      },[]);
  const getVideos= async ()=>{
    const data=await fetch(YOUTUBE_VIDEO_API);
    const json=await data.json();
    setVideos(json.items);
  };
  return (
     <div className='flex flex-wrap'>
      {videos[0] && <AdVideoCard info={videos[0]}/>}
      {videos.map((video)=>
     <Link key={video.id} to={'/watch?v='+video.id}> <Videocard info={video}/></Link>
      )}
     </div>
  )
}

export default Videos
