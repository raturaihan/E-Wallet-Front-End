import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {InputForm, BlueButton} from '../styles/Styled'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    email: '',
    password: '',
  }); 

  const handleLogin = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
        let user = await axios.post("http://localhost:8080/login", {
            email: input.email,
            password: input.password
        }); 
        if(!user.data.is_error) {
            console.log(user.data.id_token)
            localStorage.setItem('token', user.data.data.id_token);
            navigate('/home', {replace: true});
        }else if (user.data.code == 400){
            alert('invalid email')
        }else if (user.data.code == 403){
            alert('invalid password ')
        }else{
            alert('user not found')
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
                <h1 className='fw-bold fs-1'>Login</h1>
            </div>
            <form onSubmit={handleLogin}>
                <div className='row mt-5'>
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
                <BlueButton type="submit">Login</BlueButton>
            </div>
            </form>
            <div className='row mt-2'>
                <p>You don't have an account? <Link to='/register'>Register</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login