import React, {useState} from 'react'
import API from '../api'
import {useNavigate} from 'react-router-dom'

function LoginPage(){

    const[form,setForm] = useState({email:'', password:''})
    const navigate = useNavigate();

    const handleChange = (e) => setForm({...form, [e.target.name] : e.target.value})

    const handleLogin = async () =>{
    try{
        const res = await API.post('/auth/login', form)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('role',res.data.role)
        navigate(res.data.role === 'admin' ? '/admin' : '/user')
    }
    catch{
        alert('Login failed')
    }
   }

    return(
        <div>
            <h2> Login Page </h2>
            <input name="email" type="text" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <button onClick={handleLogin}> Login </button>
        </div>
    )
}

export default LoginPage