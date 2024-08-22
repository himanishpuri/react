import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorElement() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
      <div className='text-red-600 text-3xl'>{error.status} & {error.statusText}</div>
    </div>
  )
}

export default ErrorElement