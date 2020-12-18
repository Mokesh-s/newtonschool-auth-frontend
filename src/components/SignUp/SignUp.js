import React, { Component } from 'react'
import './SignUp.css'
import axios from 'axios'

export class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleOnChange (e) {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  validate () {
    const { email, password, confirmPassword } = this.state
    if (!email || !password || !confirmPassword) {
      window.alert('*Please enter the mandatory fields')
      return
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
      window.alert('Please enter a valid email')
      return
    }
    if (!(password === confirmPassword)) {
      window.alert('Passwords did not match')
      return
    }
    return true
  }

  handleSubmit () {
    if (this.validate()) {
      const { email, password } = this.state
      // api call
      axios.post('http://localhost:7000/users/register', {
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
