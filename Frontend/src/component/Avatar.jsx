import React from 'react'

const Avatar = ({avatarname }) => {
  return (
    <div>
            <div className ={`relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className="font-medium text-gray-600 dark:text-gray-300">{avatarname[0]}</span>
           </div>
      
    </div> 
  )
}

export default Avatar
