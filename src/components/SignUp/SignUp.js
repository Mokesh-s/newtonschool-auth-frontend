import React, { useState } from 'react'
import './SignUp.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignUp () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value)
    }
  }

  const validate = () => {
    if (!email || !password || !confirmPassword) {
      window.alert('*Please enter the mandatory fields')
      return false
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
      window.alert('Please enter a valid email')
      return false
    }
    if (!(password === confirmPassword)) {
      window.alert('Passwords did not match')
      return false
    }
    return true
  }

  const handleSubmit = async () => {
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:7000/users/register', {
          email,
          password
        })
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div id='sign-up'>
      {/* email */}
      <div><h1>Sign Up</h1></div>
      <div className='form-field'>
        <div>Email:</div>
        <input type='text' name='email' value={email} onChange={handleOnChange} />
      </div>
      {/* password */}
      <div className='form-field'>
        <div>Password:</div>
        <input type='password' name='password' value={password} onChange={handleOnChange} />
      </div>
      {/* confirm password */}
      <div className='form-field'>
        <div>Confirm Password:</div>
        <input type='password' name='confirmPassword' value={confirmPassword} onChange={handleOnChange} />
      </div>
      <div className='form-field'>
        <button onClick={() => navigate('/')} className='right-adjust'>Sign In</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default SignUp
        email,
        password
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  render () {
    const { email, password, confirmPassword } = this.state
    return (
      <div id='sign-up'>
        {/* email */}
        <div><h1>Sign Up</h1></div>
        <div className='form-field'>
          <div>Email:</div>
          <input type='text' name='email' value={email} onChange={this.handleOnChange} />
        </div>
        {/* password */}
        <div className='form-field'>
          <div>Password:</div>
          <input type='password' name='password' value={password} onChange={this.handleOnChange} />
        </div>
        {/* confirm password */}
        <div className='form-field'>
          <div>Confirm Password:</div>
          <input type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleOnChange} />
        </div>
        <div className='form-field'>
          <button onClick={() => this.props.history.push('/')} className='right-adjust'>Sign In</button>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default SignUp
