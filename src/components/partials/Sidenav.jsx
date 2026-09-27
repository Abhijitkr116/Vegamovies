import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
    return (
        <div className="w-[20vw] h-screen border-zinc-400 border-r-[1px] p-5 fixed top-0 left-0 bg-[#00000]">
            <h1 className='text-white font-bold text-2xl flex items-center gap-2'>
                <i className="ri-tv-fill text-[#F95C4B] text-3xl"></i>
                Vegamovies
            </h1>
            <nav className='text-white py-5 flex flex-col border-b-[1px] border-zinc-400'>
                <h1 className='mb-2 font-semibold text-lg'>New Feeds</h1>
                <Link to="/trending" className='p-5 hover:bg-[#F95C4B] duration-300 rounded-lg'>Trending</Link>
                <Link to="/popular" className='p-5 hover:bg-[#F95C4B] duration-300 rounded-lg'>Popular</Link>
                <Link to="/movie" className='p-5 hover:bg-[#F95C4B] duration-300 rounded-lg'>Movies</Link>
                <Link to="/tvshows" className='p-5 hover:bg-[#F95C4B] duration-300 rounded-lg'>TV shows</Link>
                <Link to="/people" className='p-5 hover:bg-[#F95C4B] duration-300 rounded-lg'>People</Link>
            </nav>
            <nav className='text-white py-5 flex flex-col'>
                <h1 className='mb-3 font-semibold text-lg'>Website information</h1>
                <Link className='p-5 hover:bg-[#F95C4B] duration-300 rounded-lg'>About Vegamovies</Link>
                <Link className='p-5 hover:bg-[#F95C4B] duration-300 rounded-lg'>Contact us</Link>
            </nav>
        </div>
    )
}

export default Sidenav