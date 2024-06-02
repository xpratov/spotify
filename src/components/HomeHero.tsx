import React from 'react'

const albums_data=[
  {
    id: 1,
    image: "/chill-mix.png"
  },
  {
    id: 2,
    image: "/pop-mix.png"
  },
  {
    id: 3,
    image: "/daily-mix-1.png"
  },
  {
    id: 4,
    image: "/daily-mix-5.png"
  },
  {
    id: 5,
    image: "/folk-and-acoustic-mix.png"
  },
  {
    id: 6,
    image: "/daily-mix-4.png"
  }
]

const HomeHero = () => {
  return (
    <div className='mb-11'>
      <h3 className='text-white font-bold text-4xl mb-7'>Good afternoon</h3>
      <div className='grid grid-cols-2 gap-x-7 gap-y-3 '>
        {albums_data.map((album) => (
          <div key={album.id} className='w-full flex gap-4 items-center  backdrop-blur-3xl bg-gray-500 bg-opacity-50 rounded-md text-white font-normal text-lg'>
            <img key={album.id} src={`/genres/${album.image}`} alt="Album" />
            <h6>{album.image.slice(1, -4).replaceAll("-", " ").replaceAll("and", "&")}</h6>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeHero
