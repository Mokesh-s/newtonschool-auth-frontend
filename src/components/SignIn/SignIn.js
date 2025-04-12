import React, { useState } from 'react'
import './SignIn.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignIn () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }

  const validate = () => {
    if (!email || !password) {
      window.alert('*Please enter the mandatory fields')
      return false
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
      window.alert('Please enter a valid email')
      return false
    }
    return true
  }

  const handleSubmit = async () => {
    console.log(email, password)
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:7000/users/login', {
        email,
        password
        })
        if (response.status === 200) {
          window.localStorage.setItem('login', JSON.stringify(response.data))
          navigate('/dashboard')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div id='sign-in'>
      <div><h1>Sign In</h1></div>
      <div className='form-field'>
        <div>Email*:</div>
        <input type='text' name='email' value={email} onChange={handleOnChange} />
      </div>
      <div className='form-field'>
        <div>Password*:</div>
        <input type='password' name='password' value={password} onChange={handleOnChange} />
      </div>
      <div className='form-field'>
        <button onClick={() => navigate('/signup')} className='right-adjust'>Sign Up</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default SignIn
