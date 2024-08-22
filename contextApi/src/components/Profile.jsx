import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
  const {user} = useContext(UserContext);
  if (!user) {
    return (
      <div className='text-white text-center text-3xl p-4'>Please Login</div>
    )
  }

  return (
    <div className='text-white text-center text-3xl p-4'>Welcome {user.username}</div>
  )
}

export default Profile