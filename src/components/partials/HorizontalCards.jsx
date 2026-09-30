import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'

function HorizontalCards({ data }) {
    return (
        <div className='mt-5 flex overflow-scroll gap-10 py-7'>
            {data.length > 0 ? data.map((d, index) => (
                <Link to={`/${d.media_type}/details/${d.id}`} key={index} className="card h-[300px] min-w-[200px]">
                    <img className='h-3/6 w-full object-cover' src={
                        d.backdrop_path || d.profile_path ?
                            `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}` :
                            noimage
                    } alt="" />
                    <div className='h-3/6 text-white'>
                        <h1 className='text-sm italic font-semibold py-2'>{d.name || d.title || d.original_name || d.original_title}</h1>
                        <p className='text-xs'>{d.overview.slice(0, 120)}...<span className='text-blue-500/60'>more</span></p>
                    </div>
                </Link>
            )): <h1 className='text-3xl mt-5 text-white font-black text-center'>Nothing to Show...</h1> }
        </div>
    )
}

export default HorizontalCards