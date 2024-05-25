import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import User from './components/User';
import Error from './components/Error';
import Password from './components/Password';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Register from './components/Register';
import Reset from './components/Reset';

const router = createBrowserRouter([
  {
    path : "/",
    element : <User />
  },
  {
    path : "/register",
    element : <Register />
  },
  {
    path : "*",
    element : <Error />
  },
  {
    path : "/password",
    element : <Password />
  },
  {
    path : "/profile",
    element : <Profile />
  },
  {
    path : "/recover",
    element : <Recovery />
  },
  {
    path : "/reset",
    element : <Reset />
  },
])

function App() {

  return (
    <main>
      <RouterProvider router = {router}></RouterProvider>
    </main>
  )
}

export default App
