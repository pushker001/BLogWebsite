import React from 'react'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'

const BlogCard = ({authorName, publishedDate, title, content, id }) => {
  return (
    <Link to={`/blog/${id}`}>
      
<div className='border-b border-slate-200 pb-4 pb-4 max-w-screen-md curson-pointer   '>
        <div className='flex pt-5'>
            <Avatar  avatarname={authorName} />
            <div className='font-extralight pl-2 text-sm flex justify-center flex-col'>
                {authorName}
                
            </div>
            <div className='pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col'>
                {publishedDate}
            </div>
            
        </div>

        <div className="text-xl font-semibold">
            {title}
        </div>
        <div className='text-md font-thin'>
            {content.slice(0,100) + "... "}
        </div>

        <div className='text-slate-500 text-md pt-4'>
            {`${Math.ceil(content.length /100)} minutes`}
        </div>
       
    </div>
    
    </Link>
   

   
   
  )
}

export default BlogCard
