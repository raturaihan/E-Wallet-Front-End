import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {InputForm, BlueButton} from '../styles/Styled'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Register() {
  const navigate = useNavigate() 
  const [input, setInput]= useState({
    username: '',
    email: '',
    password: '',
  });

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try{
        let user = await axios.post('http://localhost:8080/register', {
            name: input.username,
            email: input.email,
            password: input.password

        });
        if(!user.data.is_error){
            navigate('/', {replace: true})
        }
    }catch(error) {
        console.log(error)
    }
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInput({
        ...input,
        [event.currentTarget.name]: event.currentTarget.value,
    });
  }; 

  return (
    <div>
        <div className='d-flex flex-column align-items-center '>
            <div className='mt-5'>
                <h1 className='fw-bold fs-1'>Register</h1>
            </div>
            <form onSubmit={handleRegister}>
                <div className='row mt-5'>
                    <label htmlFor="username" className='form-label fw-bold'>Name</label><br />
                    <InputForm 
                        name='username'
                        type="text" 
                        className='"form-control'
                        id="username"
                        placeholder="test name"
                        value={input.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='row mt-3'>
                    <label htmlFor="email" className='form-label fw-bold'>Email</label><br />
                    <InputForm 
                        name='email'
                        type="email" 
                        className='"form-control'
                        id="email"
                        placeholder="test@email.com"
                        value={input.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='row mt-3'>
                    <label htmlFor="password" className='form-label fw-bold'>Password</label> <br />
                    <InputForm
                        name='password' 
                        type="password" 
                        className='"form-control'
                        id="password"
                        value={input.password}
                        onChange={handleChange}
                        required
                    />
                </div>
            <div className='row mt-4'>
                <BlueButton type="submit">Register</BlueButton>
            </div>
            </form>
            <div className='row mt-2'>
                <p>Already have an account? <Link to='/'>Login</Link></p>
            </div>
      </div>
    </div>
  )
}

export default Register