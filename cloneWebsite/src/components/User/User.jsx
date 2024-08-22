import React from 'react';
// we have to import useParams to get the userid from the main.jsx
import { useParams } from 'react-router-dom';

function User() {
  const {userid} = useParams();
  return (
    <div>User :{userid}</div>
  )
}

export default User;