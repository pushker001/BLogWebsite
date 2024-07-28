import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Labelledinput from '../component/Labelledinput'
import axios from 'axios'
import { BACKEND_URL } from '../config'

const Signup = () => {
  const navigate = useNavigate();

  const [postinputs, setpostinputs] = useState({
    name: "",
    password: "",
    email: ""
  })

   async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, postinputs);
      const jwt = response.data.token;
      localStorage.setItem('token', jwt);
      navigate("/blog")
    } catch (error) { 
      alert("something went wrong")
    }
  }

 

  return (
    

    <div className='h-screen flex justify-center'>
        <div className='flex justify-center flex-col '>
            <h1 className='font-bold  flex justify-center align-center text-3xl mt-5'>Create an Account</h1>
            <p className='flex justify-center mr-8 pb-5'>Already have an account? 
                <Link to={"/signin"}>Login</Link> 
            </p>
            <div className=' bg-grey-300 w-[50vh] rounded-lg'>
              <Labelledinput  label = "Name" placeholder = "harkirat singh" onChange= {(e) => {
                  setpostinputs(c => ({
                    ...c,
                    name: e.target.value

                  }))
                }}  />
                <Labelledinput label = "email" placeholder = "harkirat@gmail.com" onChange= {(e) => {
                  setpostinputs(c => ({
                    ...c,
                    email: e.target.value

                  }))
                }}  />
                <Labelledinput label = "Password" placeholder = "harkirat singh" type = {"password"} onChange= {(e) => {
                  setpostinputs(c => ({
                    ...c,
                    password: e.target.value

              }))
            }}  />
          </div>
          <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-2 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">SignUp</button>
        </div>
        
       

      
    </div>
  )
}

export default Signup
