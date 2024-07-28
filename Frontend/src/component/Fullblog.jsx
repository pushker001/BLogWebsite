import React from 'react'
import Appbar from './Appbar'

function Fullblog({blog}) {


  return (
    <div>
        <Appbar />
        <div className='grid grid-cols-12 px-10 w-full pt-10'>
        <div className='col-span-8'>
           <div className='text-3xl font-extrabold'>{blog.title}</div>

           <div className='pt-3 '>{blog.content}</div>
        </div>
        <div className='col-span-4'>

            {"anonymous"}
        
        </div>
      
    </div>
    </div>
  )
}

export default Fullblog
