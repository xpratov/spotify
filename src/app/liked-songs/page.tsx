'use client'
import Header from '@/components/Header'
import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
  const [tracks, setTracks]=useState([])
  const likeds=useSelector(state=>state.likeds)
  const dispatch=useDispatch()

  async function getTrack(trackId: string): Promise<any> {
    try {
      const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
        method: 'GET',
        headers: {
          'Authorization': `${localStorage.getItem("access_token")}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error('Trackni olishda xatolik yuz berdi:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
      return null;
    }
  }
  for (let trackId of likeds){
    getTrack(trackId)
    .then((trackData) => {
      if (trackData) {
        if (tracks){
          setTracks(...tracks, trackData)
        }else{
          setTracks([trackData])
        }
      } else {
        console.log('Trackni olishda xatolik yuz berdi.');
      }
    });
  }
  
  const handleLike=(id)=>{
    dispatch(like(id))    
  }

  return (
    <div className='w-full playlist px-9 py-7'>
      <Header profil={true}/>
      <div className='flex gap-7'>
        <div className='w-full max-w-64'>
          <img className='w-full' src="/liked-songs-img.png" alt="Liked songs" />
        </div>
        <div className='w-full'>
          <h3 className="text-sm font-medium text-white mt-12">
            PUBLIC PLAYLIST
          </h3>
          <h2 className="text-[100px] font-[900] text-white">
            Liked Songs
          </h2>
          <p className="flex gap-2 items-center font-[450] text-[18px] text-[#b3b3b3]">
            <img src="/avatar.png" alt="#" />
            davedirect3 • {likeds.length} songs
          </p>
        </div>
      </div>
      <div className="mt-6">
          {tracks ? (
            tracks.map((item, index) => (
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
  )
}

export default page
