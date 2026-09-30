
import React, { useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from '../store/action/movieAction';
import Loader from './Loader';
import HorizontalCards from './partials/HorizontalCards';

function MovieDetails() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { info } = useSelector((state) => state.movie);
    const dispatch = useDispatch();

    console.log(info);

    useEffect(() => {
        dispatch(asyncloadmovie(id));
        const isTrailerOpen = pathname.includes("/trailer");

        if (isTrailerOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            dispatch(removemovie());
            document.body.style.overflow = "";
        };
    }, [id, pathname]);

    return info ? (
        <div
            style={{
                background: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }} className='relative min-h-screen w-full px-4 pb-10 sm:px-6 md:px-8 lg:px-[6%] xl:px-[10%]'>

            {/* Part 1 navigation */}
            <nav className='flex h-[8vh] min-h-[60px] w-full items-center gap-5 text-xl text-zinc-100 sm:gap-8 sm:text-2xl md:gap-10'>
                <Link onClick={() => navigate(-1)} className="ri-arrow-left-line mr-1 cursor-pointer transition hover:text-[#F95C4B] sm:mr-2"></Link>
                <a target='_blank' rel="noreferrer" href={info.detail.homepage}>
                    <i className='ri-external-link-fill transition hover:text-[#F95C4B]'></i>
                </a>
                <a target='_blank' rel="noreferrer" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
                    <i className='ri-earth-fill transition hover:text-[#F95C4B]'></i>
                </a>
                <a target='_blank' rel="noreferrer" className="text-base font-semibold transition hover:text-[#F95C4B] sm:text-lg" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>
            </nav>

            {/* Part 2 Poster & Details */}
            <div className='mt-6 flex w-full flex-col items-center gap-7 sm:mt-8 md:mt-10 md:flex-row md:items-start md:gap-8 lg:gap-10'>
                <img className="h-auto max-h-[55vh] w-[65%] max-w-[280px] rounded object-cover transition-transform duration-300 sm:w-[45%] md:h-[50vh] md:w-[32%] md:max-w-none lg:h-[60vh] lg:w-[30%]" src={`https://image.tmdb.org/t/p/w500/${info.detail.poster_path || info.detail.backdrop_path}`} alt="" />

                <div className='content w-full min-w-0 md:w-[68%]'>
                    <h1 className='text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl'>
                        {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
                        <small className='ml-2 text-sm font-normal sm:text-base'>({info.detail.release_date.split("-")[0]})</small>
                    </h1>

                    <div className='mt-5 flex flex-wrap items-center gap-3 text-white sm:gap-4 lg:gap-5'>
                        <span className='grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F95C4B]/70 text-sm text-white sm:h-14 sm:w-14 sm:text-base'>
                            {(info.detail.vote_average * 10).toFixed()}%
                        </span>
                        <h1 className='w-[65px] text-sm font-semibold leading-5 sm:text-base'>User Score</h1>
                        <h1 className='rounded border-[1px] border-zinc-400 px-3 py-1 text-xs sm:text-sm'>{info.detail.release_date}</h1>
                        <h1 className='max-w-full rounded border-[1px] border-zinc-400 px-3 py-1 text-xs sm:text-sm'>{info.detail.genres.map((g) => g.name).join(", ")}</h1>
                        <h1 className='rounded border-[1px] border-zinc-400 px-3 py-1 text-xs sm:text-sm'>{info.detail.runtime} min</h1>
                    </div>

                    <h1 className='mt-5 text-sm font-semibold text-white sm:text-base'>{info.detail.tagline}</h1>

                    <div className='mt-5 text-white'>
                        <h1 className='text-lg font-semibold'>Overview</h1>
                        <p className='mt-1 text-sm leading-6 text-zinc-200 sm:leading-7'>{info.detail.overview}</p>
                    </div>

                    <div className='mb-6 mt-5 text-white'>
                        <h1 className='text-lg font-semibold'>Movie Translated</h1>
                        <p className='mt-1 text-sm leading-6 text-zinc-200'>{info.translations.join(", ")}</p>
                    </div>

                    <Link to={`${pathname}/trailer`} className='inline-flex items-center justify-center gap-2 rounded bg-[#F95C4B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e94b3b] sm:text-base'>
                        <i className='ri-play-fill'></i> Play Trailer
                    </Link>
                </div>
            </div>

            {/* Part 3 Available on Platforms */}
            <div className='my-8 flex w-full flex-col gap-y-5 sm:my-10'>
                {info.watchproviders &&
                    info.watchproviders.flatrate && (
                        <div className='flex flex-col gap-3 text-white sm:flex-row sm:items-center sm:gap-5'>
                            <h1 className='w-full shrink-0 font-semibold sm:w-40 lg:w-1/6'>Available on Platforms</h1>
                            <div className='flex flex-wrap items-center gap-3 sm:gap-5'>
                                {info.watchproviders.flatrate.map((w) => (
                                    <img key={w.provider_id} title={w.provider_name} className="h-10 w-10 rounded-md object-cover sm:h-12 sm:w-12" src={`https://image.tmdb.org/t/p/w500/${w.logo_path}`} alt="" />
                                ))}
                            </div>
                        </div>
                    )}

                {info.watchproviders &&
                    info.watchproviders.buy && (
                        <div className='flex flex-col gap-3 text-white sm:flex-row sm:items-center sm:gap-5'>
                            <h1 className='w-full shrink-0 font-semibold sm:w-40 lg:w-1/6'>Available on Buy</h1>
                            <div className='flex flex-wrap items-center gap-3 sm:gap-5'>
                                {info.watchproviders.buy.map((w) => (
                                    <img key={w.provider_id} title={w.provider_name} className="h-10 w-10 rounded-md object-cover sm:h-12 sm:w-12" src={`https://image.tmdb.org/t/p/w500/${w.logo_path}`} alt="" />
                                ))}
                            </div>
                        </div>
                    )}

                {info.watchproviders &&
                    info.watchproviders.rent && (
                        <div className='flex flex-col gap-3 text-white sm:flex-row sm:items-center sm:gap-5'>
                            <h1 className='w-full shrink-0 font-semibold sm:w-40 lg:w-1/6'>Available on Rent</h1>
                            <div className='flex flex-wrap items-center gap-3 sm:gap-5'>
                                {info.watchproviders.rent.map((w, i) => (
                                    <img key={i} title={w.provider_name} className="h-10 w-10 rounded-md object-cover sm:h-12 sm:w-12" src={`https://image.tmdb.org/t/p/w500/${w.logo_path}`} alt="" />
                                ))}
                            </div>
                        </div>
                    )}
                {console.log(info.watchproviders)}
            </div>

            {/* Part 4 Recommendation and similarity */}
            <hr className='my-8 border-zinc-700 sm:my-10' />
            <h1 className='text-2xl font-bold text-white sm:text-3xl lg:text-4xl'>Recommendations & Similar Stuff</h1>
            <p className='mt-2 text-xs text-zinc-500 sm:text-sm'>More stories you might enjoy, based on this movie.</p>
            <HorizontalCards data={info.recommendations.length > 0 ? info.recommendations : info.similar} />

            <Outlet />
        </div>
    ) : <Loader />
}

export default MovieDetails
