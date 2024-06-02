import { useRouter } from 'next/navigation'
import React from 'react'

let genres:string[]=[
  "Chill Mix",
  "Insta Hits",
  "Your Top Songs 2021",
  "Mellow Songs",
  "Anime Lofi & Chillhop Music",
  "BG Afro “Select” Vibes",
  "Afro “Select” Vibes",
  "Happy Hits!",
  "Deep Focus",
  "Instrumental Study",
  "OST Compilations",
  "Nostalgia for old souled mill...",
  "Mixed Feelings"
]

const Menu = () => {
  const router=useRouter()
  const handleLikedPage = () => {
    router.push('/liked-songs')
  }

  return (
    <menu className='max-w-64 w-full h-full flex flex-col items-center bg-black text-white'>
      <div className='max-w-48 w-full mt-12 pb-4 border-[#282828] border-b'>
        <ul className='w-full gap-4 flex flex-col mb-10 '>
          <li onClick={()=>router.push('/')} className='flex items-center gap-4 cursor-pointer'>
            <img className='w-7' src="/home-icon.svg" alt="Home" />
            <p>Home</p>
          </li>
          <li className='flex items-center gap-4 cursor-pointer'>
            <img className='w-7' src="/search-icon.svg" alt="Lupa" />
            <p>Search</p>
          </li>
        </ul>
        <ul className='w-full gap-4 flex flex-col '>
          <li className='flex items-center gap-4 cursor-pointer'>
            <img className='w-7' src="/yourlibrary-icon.svg" alt="Library" />
            <p>Your Library</p>
          </li>
          <li className='flex items-center gap-4 cursor-pointer'>
            <img className='w-7' src="/createplaylist-icon.svg" alt="Create Playlist" />
            <p>Create Playlist</p>
          </li>
          <li onClick={handleLikedPage} className='flex items-center gap-4 cursor-pointer' >
            <img className='w-7' src="/likedsongs-icon.svg" alt="Liked songs" />
            <p>Liked Songs</p>
          </li>
        </ul>
      </div>
      <div className='max-w-48 w-full pt-2'>
        {genres.map((genre,index)=>(
          <p key={index} className='w-full text-left text-sm py-2 text-[#b3b3b3] cursor-pointer'>{genre}</p>
        ))}
      </div>
    </menu>
  )
}

export default Menu
