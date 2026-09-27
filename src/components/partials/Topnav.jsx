import axios from '../../utils/axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'

function Topnav() {
    const [query, setquery] = useState("");

    const [searches, setsearches] = useState([]);

    const GetSearches = async () => {
        if (!query.trim()) return;

        try {
            const { data } = await axios.get(`/search/multi?query=${query}`)
            setsearches(data.results)
        }
        catch (error) {
            console.log("Error: ", error)
        }
    }

    useEffect(() => {
        GetSearches();
    }, [query])
    // bg-[#F6F4F1]
    return (
        <div className='w-full flex items-center justify-center  z-50  h-fit py-5 text-lg relative'>

            <i className="ri-search-line text-2xl cursor-pointer text-white"></i>
            <input onChange={(e) => setquery(e.target.value)} value={query} className='border-[1px] border-zinc-300 text-white py-2 ml-2 rounded-lg outline-none  w-[60%] px-5' type="text" placeholder='Search anything' />
            {query.length > 0 &&
                <i onClick={() => (
                    setquery(""),
                    setsearches([])
                )} className="ri-close-fill text-2xl cursor-pointer text-white"></i>
            }

            {searches.length > 0 && (
                <div className="absolute w-[60%] max-h-[60vh] overflow-y-auto top-[80%] flex flex-col gap-2 text-white bg-white/10 backdrop-blur-lg border border-white/20 ml-2">
                    {searches.map((data, index) => (
                        <Link
                            key={index}
                            className='hover:bg-[#E4DED2] hover:text-black w-full flex items-center gap-5 duration-300'
                        >
                            <img
                                className='h-[200px] min-w-[200px] object-cover'
                                src={
                                    data.backdrop_path || data.profile_path
                                        ? `https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}`
                                        : noimage
                                }
                                alt=""
                            />

                            <span className='text-lg'>
                                {data.name ||
                                    data.title ||
                                    data.original_name ||
                                    data.original_title}
                            </span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Topnav