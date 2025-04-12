import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Dashboard from './components/Dashboard/Dashboard'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <SignIn /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/dashboard', element: <Dashboard /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter> <AppRoutes /></BrowserRouter>
    </div>
  )
}

export default App
