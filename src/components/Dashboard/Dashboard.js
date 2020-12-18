import React, { Component } from 'react'
// import './Dashboard.css'
import axios from 'axios'

export class Dashboard extends Component {
  componentDidMount () {
    if (!window.localStorage.getItem('login')) { this.props.history.push('/') }
    const login = JSON.parse(window.localStorage.getItem('login'))
    console.log(login.user.id)
    axios.get('http://localhost:7000/users/', {
      headers: { 'x-auth-token': login.token }
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render () {
    return (
      <div id='dashboard'>
        <h1>Dashboard with user sensitive data</h1>
      </div>
    )
  }
}

export default Dashboard
