'use client'
import Header from '@/components/Header'
import { like } from '@/redux/playlistSlice'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'

const PlayList = () => {
  const [data, setData]=useState(null)
  const [musicItems, setMusicItems]=useState(null)
  const dispatch=useDispatch()
  const playlist_id=useSelector((state)=>state.selected_playlist_id)
  const likedSongs:string[]=useSelector(state=>state.likeds)
  
  
  async function getTracks() {
    try {
      const res = await fetch(
        `https://api.spotify.com/v1/playlists/${playlist_id}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("access_token")}`,
          },
        }
      );
      const datas = await res.json();
      setData(datas)
      setMusicItems(datas.tracks.items.splice(0, 19));
    } catch (err) {
      console.log(err);
    }
  } 

  useEffect(()=>{
    getTracks()
  }, [])

  const handleLike=(id)=>{
    dispatch(like(id))    
  }

  return (
    <div className='w-full playlist px-9 py-7'>
      <Header profil={false}/>
      <div className="flex gap-8">
        <div className='h-[290px] w-[400px]'>
          {data ? (
            <img src={data.images[0].url} alt="#" className="w-full playlist-img max-w-72 h-full" />) 
            :(<Skeleton className="w-auto h-auto m-0" baseColor="#ffffff1c" ></Skeleton>
          )}
        </div>
        <div className='w-full'>
          <h3 className="text-sm font-medium text-white mt-12">
            PUBLIC PLAYLIST
          </h3>
          <h2 className="text-[112px] font-[900] text-white">
            {data ? (
              data.name.slice(0, 11)) 
              : (<Skeleton className="w-[200px] h-[112px] m-0" baseColor="#ffffff1c" ></Skeleton>
            )}
          </h2>
          <p className="fnt font-[450] text-[18px] text-[#b3b3b3]">
            {data ? (
              data.description) 
              : (<Skeleton className="w-[150px] h-[18px] m-0" baseColor="#ffffff1c" ></Skeleton>
            )}
          </p>
          <p className="fnt font-[450] text-[18px] text-[#b3b3b3]">
            Made for davedirect3 34 songs, 2hr 01 min
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-white text-[24px] font-[900]">
          Tracks
        </h3>
        <div className="mt-6">
          {musicItems ? (
            musicItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <span className="text-[#b3b3b3] text-sm w-8">
                    {index + 1}
                  </span>
                  <div className="flex items-center ml-4">
                    <img src={item.track.album.images[0].url} alt="#" className="w-10 h-10 rounded-lg" />
                    <div className="ml-4">
                      <p className="text-white text-sm font-[900]">
                        {item.track.name.slice(0, 30)}
                      </p>
                      <p className="text-[#b3b3b3] text-sm">
                        {item.track.artists[0].name}
                      </p>
                    </div>
                    <p className="text-[#b3b3b3] text-sm absolute ml-80">
                      {item.track.album.name}
                    </p>
                    <button onClick={()=>{handleLike(item.track.id)}} className='absolute ml-[700px]'>
                      {likedSongs.includes(item.track.id)?
                      <img src="/like-fill-icon.svg" alt="liked" />:
                      <img className='w-8' src="/like-icon.svg" alt="Like" />}
                    </button>
                  </div>
                </div>
                <p className="text-[#b3b3b3] text-sm">
                  {Math.floor(item.track.duration_ms / 60000)}:{Math.floor((item.track.duration_ms % 60000) / 1000)}
                </p>
              </div>
            ))):(<Skeleton className="w-full h-[50px] m-0" baseColor="#ffffff1c" ></Skeleton>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlayList
