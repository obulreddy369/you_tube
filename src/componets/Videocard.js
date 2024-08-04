import React from 'react'

const Videocard = ({info}) => {
  if (!info || !info.snippet || !info.statistics) {
    return <div>Loading...</div>; // or some other fallback UI
  }// read in chat gpt
     const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-2 w-60 m-2'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/>
         <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
         </ul>
    </div>
  )
}
export const AdVideoCard=({info})=>{
  return (
    <div className='p-1 m-1 border border-pink-300'>
      <Videocard info={info}/>
      </div>

  )
}

export default Videocard
