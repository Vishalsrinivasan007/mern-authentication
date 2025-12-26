import { useState } from 'react'
import axios from 'axios'

useState

function Signup(){
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")

    async function handleSignup(e){
        try {
            e.preventDefault()

        await axios.post('http://localhost:5000/api/auth/signup',{
            name,email,password
        })
        alert('Signup Successful')
        window.location.href='/login'
        } catch (error) {
            alert('Signup failed')
        }
    }
    return(
        <div>
        <h1>Signup page</h1>
        <form action="" onSubmit={handleSignup}>
            <input type="text"
            value={name} 
            placeholder='Enter the name'
            onChange={(e)=>{setName(e.target.value)}}
            required/>
            <input type="email"
            value={email} 
            placeholder='Enter the Email'
            onChange={(e)=>{setEmail(e.target.value)}}
            required/>
            <input type="password"
            value={password} 
            placeholder='Enter the Password'
            onChange={(e)=>{setPassword(e.target.value)}}
            required/>
            <button type='submit'>Signup</button>
        </form>
        </div>
    )

}
export default Signup