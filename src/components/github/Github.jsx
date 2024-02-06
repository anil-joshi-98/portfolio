import React, { useState, useEffect } from 'react'
import useGetUser from '../customhook/useGetUser'

function Github() {

  const data=useGetUser();

  return (
    <div className='text-center bg-gray-500 m-4 text-3xl text-white p-4'>
      Github followers: {data.followers}
      <span className='flex justify-center my-6 items-center rounded-full'>
        <img className='rounded-full' src={data.avatar_url} alt="image" height={200} width={300}/>
      </span>
    </div>

  )
}

export default Github