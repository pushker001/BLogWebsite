 import { useEffect, useState  } from "react";
 import axios from 'axios'
 import { BACKEND_URL } from "../config";



 export const useBlog = () => {

    const [loading , setloading ] = useState(true);
    const [blogs, setblogs] = useState([]);



    useEffect( () => {
     axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {headers: {
        Authorization: localStorage.getItem("token")
    }
})
            .then(response => {
                setblogs(response.data.blogs)
                setloading(false);
            })
    },[])

    return {

        loading,
        blogs
         
    }

 }

 export const useBloge = ({id}) => {
    const [loading, setloading] = useState(true);
    const [bloge, setbloge] = useState([]);


    useEffect( () => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {headers: {
           Authorization: localStorage.getItem("token")
       }
   })
               .then(response => {
                   setbloge(response.data.blog)
                   setloading(false);
               })
       },[id])

       
   
       return {
   
           loading,
           bloge
            
       }


 }