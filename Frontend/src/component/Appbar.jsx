import React from 'react'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'

const Appbar = () => {
  return (
    <div className='border-b flex justify-between px-10 py-4'>
        <div className='flex justfiy-center flex-col '>Medium</div>
        

        
        <div className='flex gap-2'> 
    <Link to={"/publish"} >
        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
      </Link >
            <Avatar avatarname={"Ramesh"} />
        </div>
      
    </div>
  )
}

export default Appbar
