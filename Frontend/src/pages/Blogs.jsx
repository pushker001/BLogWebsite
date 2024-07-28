import React from 'react'
import BlogCard from '../component/BlogCard'
import Appbar from '../component/Appbar'
import { useBlog } from '../Hooks'

const Blogs = () => {

    const{loading, blogs} = useBlog();

    if(loading){
      return <div>loding...</div>
    }

  return (
    <div>
        <Appbar />
    
        <div className='flex justify-center'>
            <div className='pt-5 max-w-xl'>
            {blogs.map(blog => <BlogCard 
            id={blog.id}
            authorName={blog.author.name || "Anonymous"}
            title = {blog.title}
            content={blog.content}
            publishedDate={"23 December 2024"}

/>)}
        
        </div>
        </div>
    </div>
  )
}

export default Blogs
