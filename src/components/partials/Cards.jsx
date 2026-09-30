import React from 'react'
import { Link } from 'react-router-dom'

function Cards({ data, title }) {
    console.log(title)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 w-full md:py-8 p-10 lg:px-[4%] ">

            {data.map((c, i) => (
                <Link
                    to={`/${c.media_type || title}/details/${c.id}`} key={i}
                    className="w-full bg-zinc-900 p-4 sm:p-5 rounded-lg
                    hover:bg-zinc-800 transition-all duration-300 relative"
                >
                    <img
                        className="w-full aspect-[2/3] object-cover rounded
                        transition-transform duration-300"
                        src={`https://image.tmdb.org/t/p/w500/${c.poster_path || c.backdrop_path || c.profile_path
                            }`}
                        alt={c.name || c.title || c.original_name || c.original_title}
                    />

                    <h1 className="text-white text-base sm:text-lg md:text-2xl font-semibold mt-3 line-clamp-2">
                        {c.name || c.title || c.original_name || c.original_title}
                    </h1>
                    {c.vote_average && <span className='text-white rounded-tr md:rounded-tr-2xl rounded-tl-2xl rounded-br-2xl absolute top-0 md:top-[-2%] right-0 md:right-[-5%] bg-red-600 md:bg-red-600/60 h-[10vw] md:h-[3vw] w-[10vw] md:w-[3.5vw] grid place-items-center'>
                        {(c.vote_average * 10).toFixed()}%
                    </span>}
                </Link>
            ))}

        </div>
    )
}

export default Cards