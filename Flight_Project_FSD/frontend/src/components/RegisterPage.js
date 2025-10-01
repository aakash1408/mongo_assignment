import React, {useState} from 'react'
import API from '../api'
import {useNavigate} from 'react-router-dom'

function RegisterPage(){

    const[form,setForm] = useState({email:'', password:'', role:'user'})
    const navigate = useNavigate();

    const handleChange = (e) => setForm({...form, [e.target.name] : e.target.value})

    const handleRegister = async () =>{
    try{
        await API.post('/auth/register', form)
        alert('Registration successfull !!')
        navigate('/')
    }
    catch{
        alert('Registration failed')
    }
   }

    return(
        <div>
            <h2> Register Page </h2>
            <input name="email" type="text" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <select name="role" onChange={handleChange}>
                <option value="user"> User </option>
                <option value="admin"> Admin </option>
            </select>
            <button onClick={handleRegister}> Register </button>
        </div>
    )
}

export default RegisterPage