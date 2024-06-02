'use client'
import React, { useState } from 'react'

const Friends = () => {
  const [friends, setFriends]=useState<number[]>([1, 2, 3])
  return (
    <div className='max-w-72 w-full bg-black text-white py-6 px-4'>
      <div className='flex justify-between items-center mb-5'>
        <h6 className='text-[#ccc] font-bold text-lg'>Friend Activity</h6>
        <div className='flex '>
          <img className='w-8 cursor-pointer' src="/useradd-icon.svg" alt="User adding" />
          <img className='w-8 cursor-pointer' src="/close-icon.svg" alt="Close " />
        </div>
      </div>
      <p className='text-[#ccc] text-base font-normal'>Let friends and followers on Spotify see what you’re listening to.</p>
      <div>
        {friends.map((friend,index)=>(
          <div key={index} className='flex items-center gap-4 my-4'>
            <img className='' src="/useritem-icon.svg" alt="User" />
          </div>
        ))}
      </div>
      <p className='text-[#ccc] text-base font-normal mb-5'>Go to Settings {'>'} Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
      <button className='w-52 h-14 flex justify-center items-center bg-white text-black rounded-full m-auto '>SETTINGS</button>
    </div>
  )
}

export default Friends
