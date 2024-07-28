import React from 'react'
import { useBloge } from '../Hooks'
import { useParams } from 'react-router-dom';
import Fullblog from '../component/Fullblog';

const Blog = () => {

  const {id} = useParams();

  const {loding, bloge}  = useBloge({
    id: id || ""
  });

  if(loding){
    return <div>
      loding... 
    </div>
  }
 


  return (


    <div>
      <Fullblog blog={bloge}/>
    </div>
  )
}

export default Blog
