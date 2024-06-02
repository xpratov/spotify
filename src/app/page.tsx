'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import getPlaylists from '@/utils/getPlaylist'
import HomeHero from '@/components/HomeHero'
import Playlists from '@/components/Playlists'

const Page = () => {
  const router=useRouter()
  getPlaylists()
  return (
    <div className='home max-w-[1272px] w-full h-full px-9 py-7 bg-violet-600'>
      <Header profil={false}/>
      <HomeHero/>
      <Playlists/> 
    </div>
  )
}

export default Page
