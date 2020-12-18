import React, { Component } from 'react'
import './SignIn.css'
import axios from 'axios'

export class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
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
    const { email, password } = this.state
    if (!email || !password) {
      window.alert('*Please enter the mandatory fields')
      return
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
      window.alert('Please enter a valid email')
      return
    }
    return true
  }

  handleSubmit () {
    const { email, password } = this.state
    console.log(email, password)
    if (this.validate()) {
      // api call
      axios.post('http://localhost:7000/users/login', {
        email,
        password
      })
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
            window.localStorage.setItem('login', JSON.stringify(response.data))
            this.props.history.push('/dashboard')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  render () {
    const { email, password } = this.state
    return (
      <div id='sign-in'>
        <div><h1>Sign In</h1></div>
        {/* email */}
        <div className='form-field'>
          <div>Email*:</div>
          <input type='text' name='email' value={email} onChange={this.handleOnChange} />
        </div>
        {/* password */}
        <div className='form-field'>
          <div>Password*:</div>
          <input type='password' name='password' value={password} onChange={this.handleOnChange} />
        </div>
        <div className='form-field'>
          <button onClick={() => this.props.history.push('/signup')} className='right-adjust'>Sign Up</button>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default SignIn
