import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  // .then(response => response.json())
  // .then(dat => {
  //   setData(dat)
  //   console.log(dat);
  // })
  // .catch(err => console.error(err))
  // }, []);

  // the above work has to be done by loader, which basically loads the stuff and stores in cache for quick retrieval
  const data = useLoaderData();


  return (
    <>
      <div>Followers: {data?.followers}</div>
      <img src={data?.avatar_url} />
    </>
  )
}

export default Github;

export async function getGithubInfo() {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  if (!response.ok) {
    throw new Error("Something went Wrong !!");
  }
  return response.json();
}
