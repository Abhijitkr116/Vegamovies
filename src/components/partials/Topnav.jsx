
import axios from '../../utils/axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'

function Topnav() {
    const [query, setQuery] = useState('')
    const [searches, setSearches] = useState([])

    useEffect(() => {
        if (!query.trim()) {
            setSearches([])
            return
        }

        const timer = setTimeout(async () => {
            try {
                const { data } = await axios.get(
                    `/search/multi?query=${encodeURIComponent(query)}`
                )
                setSearches(data.results || [])
            } catch (error) {
                console.log('Search error:', error)
            }
        }, 400)

        return () => clearTimeout(timer)
    }, [query])

    const clearSearch = () => {
        setQuery('')
        setSearches([])
    }

    return (
        <div className="relative z-20 w-full px-4 py-4 sm:px-6 sm:py-5">
            <div className="mx-auto flex w-full max-w-4xl items-center gap-2 pl-[70px] md:pl-0">
                <i className="ri-search-line shrink-0 text-xl text-white sm:text-2xl"></i>

                <input
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    className="min-w-0 flex-1 rounded-lg border border-zinc-600 bg-zinc-900/80 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-[#F95C4B] sm:px-5 sm:py-3 sm:text-base"
                    type="text" placeholder="Search anything..."/>

                {query.length > 0 && (
                    <button
                        type="button"
                        onClick={clearSearch}
                        aria-label="Clear search"
                        className="shrink-0 text-2xl text-white"
                    >
                        <i className="ri-close-fill"></i>
                    </button>
                )}
            </div>

            {searches.length > 0 && query.trim() && (
                <div className="absolute left-4 right-4 top-full z-30
                        mx-auto max-h-[65vh] max-w-4xl overflow-y-auto
                        rounded-lg border border-white/20
                        bg-zinc-950/95 text-white shadow-xl
                        backdrop-blur-lg sm:left-6 sm:right-6">
                    {searches.map((data) => {
                        const title =
                            data.name ||
                            data.title ||
                            data.original_name ||
                            data.original_title ||
                            'Untitled'

                        const imagePath =
                            data.backdrop_path || data.profile_path

                        return (
                            <Link
                                key={`${data.media_type}-${data.id}`}
                                to={
                                    data.media_type === 'person'
                                        ? `/people`
                                        : data.media_type === 'tv'
                                            ? `/tvshows`
                                            : `/movie`
                                }
                                onClick={clearSearch}
                                className="flex w-full items-center gap-3 border-b
                           border-white/10 p-2 transition
                           hover:bg-white/10 sm:gap-4 sm:p-3"
                            >
                                <img
                                    className="h-16 w-16 shrink-0 rounded object-cover
                             sm:h-20 sm:w-28"
                                    src={
                                        imagePath
                                            ? `https://image.tmdb.org/t/p/w342${imagePath}`
                                            : noimage
                                    }
                                    alt=""
                                />

                                <div className="min-w-0">
                                    <p className="truncate text-sm font-medium sm:text-base">
                                        {title}
                                    </p>
                                    <p className="mt-1 text-xs capitalize text-zinc-400">
                                        {data.media_type || 'Result'}
                                    </p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Topnav