import React from 'react'
import FilteringPlaylist from './FilteringPlaylist'

const Playlists = () => {
  return (
    <div>
      <FilteringPlaylist category={"Your top mixes"}/>
      <FilteringPlaylist category={"Jump back in"}/>
      <FilteringPlaylist category={"Made for you"}/>
      <FilteringPlaylist category={"Uniquely yours"}/>
    </div>
  )
}

export default Playlists