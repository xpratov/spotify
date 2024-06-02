'use client'
import { select_playlist } from '@/redux/playlistSlice'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'


const FilteringPlaylist = ({category}:string) => {
  const [data, setData] = useState<any[]>([])
  const dispatch= useDispatch()
  const router=useRouter()


  const handlePlaylist=(id:string)=>{
    dispatch(select_playlist(id))
    router.push("/playlist")
  }

  useEffect(()=>{
    const getPlaylists = async () => {
      try {
        let res = await fetch("https://api.spotify.com/v1/browse/featured-playlists",
        {
          headers: {
            "Authorization": `${localStorage.getItem("access_token")}`
          }
        }
        );
        let {playlists}=await res.json();
        let random=Math.trunc(Math.random()*15);        
        setData(playlists.items.slice(random, random+4))
        
      }
      catch(err){
        console.log(err);   
      }
    }
    getPlaylists()
  },[])
  return (
    <section className='w-full mb-11'>
      <div className='w-full flex justify-between mb-5'>
        <h2 className='font-bold text-2xl text-white'>{category}</h2>
        <p className='font-bold text-sm text-[#adadad]'>SEE ALL</p>
      </div>
      <div className='w-full flex justify-between gap-7'>
        {data?.map((playlist:any)=>(
          <div onClick={()=>{handlePlaylist(playlist.id)}} key={playlist.id} className='bg-white w-full cursor-pointer bg-opacity-10 p-4 rounded-md'>
            <img src={playlist.images[0].url} alt={playlist.name} className='rounded-md mb-5 h-44' />
            <h6 className='text-white font-bold mb-2 tracking-wide '>{playlist.name.length>19?playlist.name.slice(0, 19)+"...":playlist.name}</h6>
            <p className='text-[#b3b3b3] font-normal text-base'>{playlist.description.slice(0, 31)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FilteringPlaylist
