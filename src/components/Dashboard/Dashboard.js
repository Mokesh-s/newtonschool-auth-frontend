import React, { useEffect } from 'react'
// import './Dashboard.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Dashboard () {
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      if (!window.localStorage.getItem('login')) {
        navigate('/')
        return
      }
      try {
        const login = JSON.parse(window.localStorage.getItem('login'))
        console.log(login.user.id)
        const response = await axios.get('http://localhost:7000/users/', {
          headers: { 'x-auth-token': login.token }
        })
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [navigate])

  return (
    <div id='dashboard'>
      <h1>Dashboard with user sensitive data</h1>
    </div>
  )
}

export default Dashboard
