import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <h1 className='bg-black text-white text-center text-6xl py-5'>Hello World</h1>
        <Login />
        <Profile />
    </UserContextProvider>
  )
}

export default App