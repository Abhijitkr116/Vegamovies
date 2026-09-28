import React from 'react'
import { Link } from 'react-router-dom'

function Header({ data }) {
    return (
        <div className='h-[60vh] w-full flex flex-col items-start justify-end p-[7%]'
            style={{
                background: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
            <h1 className='text-white w-[100%] md:w-1/2 text-4xl md:text-6xl font-black'>
                {data.name || data.title || data.original_name || data.original_title}
            </h1>
            <p className='text-white w-full md:w-1/2 mt-2 md:mt-3 mb-3 text-sm md:text-lg'>
                {data.overview.slice(0, 200)}..<Link to={`/${data.media_type}/details/${data.id}`} className='cursor-pointer text-blue-500'> more</Link>
            </p>
            <div className='flex gap-3 mb-3'>
                <p className='text-white'>
                    <i class="ri-megaphone-fill text-yellow-500 mr-1"></i>
                    {data.release_date || "No information"}
                </p>
                <p className='text-white'>
                    <i class="ri-album-fill text-yellow-500 mr-1"></i>
                    {data.media_type.toUpperCase()}
                </p>
            </div>
            <Link className='bg-[#F95C4B] py-2 px-5 text-white'>Watch trailer</Link>
        </div>
    )
}

export default Header