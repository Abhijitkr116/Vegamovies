import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from '../store/action/movieAction';
import Loader from './Loader';

function MovieDetails() {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { info } = useSelector((state) => state.movie);
    const dispatch = useDispatch();

    console.log(info);

    useEffect(() => {
        dispatch(asyncloadmovie(id));

        return () => {
            dispatch(removemovie());
        };
    }, []);

    return info ? (
        <div
            style={{
                background: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }} className='w-full h-screen px-[10%]'>
            {/* Part 1 navigation */}
            <nav className='w-full text-zinc-100 text-2xl flex gap-10 h-[10vh] items-center'>
                <Link onClick={() => navigate(-1)} className="hover:text-[#F95C4B] cursor-pointer ri-arrow-left-line mr-2"></Link>
                <a target='_blank' href={info.detail.homepage}>
                    <i className='ri-external-link-fill'></i>
                </a>
                <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
                    <i className='ri-earth-fill'></i>
                </a>
                <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>
            </nav>

            {/* Part 2 Poster & Details */}
            <div className='w-full flex gap-10 mt-10 items-center'>

                <img className="h-[60vh] object-cover rounded transition-transform duration-300"
                    src={`https://image.tmdb.org/t/p/w500/${info.detail.poster_path || info.detail.backdrop_path
                        }`}
                    alt=""
                />

                <div className='content w-1/2'>
                    <h1 className='text-6xl font-bold text-white'>{info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
                        <small className='text-base ml-2'>({info.detail.release_date.split("-")[0]})</small>
                    </h1>

                    <div className='flex text-white items-center gap-5 mt-5'>
                        <span className='text-white rounded-full bg-[#F95C4B]/70 h-[3vw] w-[3vw] grid place-items-center'>
                            {(info.detail.vote_average * 10).toFixed()}%
                        </span>
                        <h1 className='font-semibold text-lg w-[60px] leading-5'>User Score</h1>
                        <h1 className='rounded border-zinc-400 border-[1px] px-3 py-1'>{info.detail.release_date}</h1>
                        <h1 className='rounded border-zinc-400 border-[1px] px-3 py-1'>{info.detail.genres.map((g)=>g.name).join(", ")}</h1>
                        <h1 className='rounded border-zinc-400 border-[1px] px-3 py-1'>{info.detail.runtime}min</h1>
                    </div>

                    <h1 className='text-white mt-5 font-semibold'>{info.detail.tagline}</h1>

                    <div className='mt-5 text-white'>
                        <h1 className='text-lg font-semibold'>Overview</h1>
                        <p className='text-sm'>{info.detail.overview}</p>
                    </div>

                    <div className='mt-5 text-white mb-5'>
                        <h1 className='text-lg font-semibold'>Movie Translated</h1>
                        <p className='text-sm'>{info.translations.join(", ")}</p>
                    </div>

                    <Link to={`${pathname}/trailer`} className='bg-[#F95C4B] text-white px-5 py-2 rounded'><i className='ri-play-fill'></i> Play Trailer</Link>
                    
                </div>
            </div>

            {/* Part 3 Available on  Platforms */}
            <div className='w-[80%] flex flex-col gap-y-5 mt-5'>

                {info.watchproviders &&
                    info.watchproviders.flatrate && (
                        <div className='flex gap-x-5 items-center text-white'>
                            <h1>Available on Platforms</h1>

                            {info.watchproviders.flatrate.map((w) => (
                                <img key={w.provider_id}
                                    title={w.provider_name}
                                    className="h-[5vh] w-[5vh] object-cover rounded-md"
                                    src={`https://image.tmdb.org/t/p/w500/${w.logo_path}`}
                                    alt=""
                                />
                            ))}
                        </div>
                    )}

                {info.watchproviders &&
                    info.watchproviders.buy && (
                        <div className='flex gap-x-5 items-center text-white'>
                            <h1>Available on Buy</h1>

                            {info.watchproviders.buy.map((w) => (
                                <img key={w.provider_id}
                                    title={w.provider_name}
                                    className="h-[5vh] w-[5vh] object-cover rounded-md"
                                    src={`https://image.tmdb.org/t/p/w500/${w.logo_path}`}
                                    alt=""
                                />
                            ))}
                        </div>
                    )}

                {info.watchproviders &&
                    info.watchproviders.rent && (
                        <div className='flex gap-x-5 items-center text-white'>
                            <h1>Available on Rent</h1>

                            {info.watchproviders.rent.map((w) => (
                                <img key={w.provider_id}
                                    title={w.provider_name}
                                    className="h-[5vh] w-[5vh] object-cover rounded-md"
                                    src={`https://image.tmdb.org/t/p/w500/${w.logo_path}`}
                                    alt=""
                                />
                            ))}
                        </div>
                    )}
                {console.log(info.watchproviders)}
            </div>
        </div>
    ) : <Loader />
}

export default MovieDetails