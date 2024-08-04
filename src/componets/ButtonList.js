import React from 'react'
import Button from './Button'

const list=["All","Gaming","Songs","Live","Cricket","Soccer","News","Gaming"]
const Buttons = () => {

  return (
    <div className='flex items-center w-full'>
    <div className='flex overflow-x-auto whitespace-nowrap flex-grow ' >
      {list.map((name,index)=>(
       <Button key={index} name={name}/>
      ))
      }
      </div>
    </div>
  )
}

export default Buttons
