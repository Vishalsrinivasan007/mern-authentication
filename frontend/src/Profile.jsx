import axios from 'axios'
import react, { useEffect, useState } from 'react'

const Profile = () => {
    let [data,setData]=useState(null)

    useEffect(()=>{
        let token=localStorage.getItem('token')
        if(!token){
            window.location.href='/login'
            return
        }
        axios.get('http://localhost:5000/api/auth/profile',{
            headers:{Authorization:token}
        })
        .then(res=>setData(res.data))
        .catch(()=>{
            localStorage.removeItem('token')
            window.location.href='/login'
        })
    },[])
  return (
    <div>
      <h1>Profile page</h1>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  )
}

export default Profile
