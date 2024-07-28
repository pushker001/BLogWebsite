import React, { useState } from 'react'
import Appbar from '../component/Appbar'
import Texteditor from '../component/Texteditor'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Publish = () => {
   const [title, settitle] = useState("")
   const [des, setdes] = useState("")
   const navigate = useNavigate();

  return (
    <div >
        <Appbar />
        <div className='flex justify-center flex-col '>
        <div className='flex justify-center w-full  '>
        <input onChange={(e) => {
            settitle(e.target.value)
        }} type='text' placeholder='title' 
            className='w-[50%]  border-slate-600 p-4 mt-5' />   
        </div>
        <Texteditor onChange={(e)=> {
            setdes(e.target.value)
        }} />
        <div className='flex  flex-col items-center'>
        <button onClick={async ()=> {
           const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title: title,
                content: des
            }, {
                headers:  {
                    Authorization: localStorage.getItem("token")
                }
            });
            navigate(`/blog/${response.data.id}`)
        }} type="button" className="w-[10%] items-center mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Publish</button>
        </div>
        </div>
       
      
    </div>
  )
}

export default Publish
