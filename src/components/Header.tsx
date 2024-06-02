import React from 'react'

const Header = ({profil}:boolean) => {
  return (
    <div className='w-full flex justify-between mb-12'>
      <div className='flex gap-5'>
        <img src="/back-icon.svg" alt="Back" />
        <img src="/forward-icon.svg" alt="Forward" />
      </div>
      {profil==true&&<img src="/profile-view-test.png" alt="Test profile" />}
    </div>
  )
}

export default Header
