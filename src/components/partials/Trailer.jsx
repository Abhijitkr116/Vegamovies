import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NotFound from '../NotFound';

function Trailer() {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category].info.videos);

    console.log(ytvideo.key)
    return (
        <div className='bg-[rgba(0,0,0,0.9)] fixed z-10 top-0 left-0 h-screen w-full flex items-center justify-center flex-col'>
            <Link onClick={() => navigate(-1)} className="hover:text-[#F95C4B] text-white cursor-pointer text-3xl absolute top-[5%] right-20 ri-close-fill px-3 py-1"></Link>
            {ytvideo ?
                <ReactPlayer controls height={800} width={1500} src={`https://www.youtube.com/watch?v=${ytvideo.key}`} /> :
                <NotFound />
            }
        </div>
    )
}

export default Trailer