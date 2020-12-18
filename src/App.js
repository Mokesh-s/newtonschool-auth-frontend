import logo from './logo.svg'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Dashboard from './components/Dashboard/Dashboard'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
