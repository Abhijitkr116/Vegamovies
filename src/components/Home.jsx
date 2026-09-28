import { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import axios from '../utils/axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown'
import Loader from './Loader';
import Sidenav from './partials/Sidenav';

function Home() {
    document.title = "Vegamovies | Home"

    const [wallpaper, setWallpaper] = useState(null);
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState("all");

    const GetHeaderWallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`);

            const randomIndex = Math.floor(
                Math.random() * data.results.length
            );

            setWallpaper(data.results[randomIndex]);
        } catch (error) {
            console.error("Header wallpaper error:", error);
            setError("Failed to load movie data.");
        }
    };

    const GetTrendingMovie = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);

            setTrending(data.results);
        } catch (error) {
            console.error("Trending movies error:", error);
            setError("Failed to load trending movies.");
        }
    };


    useEffect(() => {
        const loadHomeData = async () => {
            setLoading(true);
            setError(null);

            await Promise.all([
                GetTrendingMovie(),
                GetHeaderWallpaper()
            ]);

            setLoading(false);
        };

        loadHomeData();
    }, [category]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">
                        Something went wrong
                    </h2>

                    <p className="mt-2 text-gray-400">
                        Unable to load movie data.
                    </p>

                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-5 py-2 bg-red-500 rounded"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className='relative min-h-screen w-full overflow-hidden md:ml-64 md:w-[calc(100%-16rem)]'>
            <Topnav />
            <Header data={wallpaper} />
            <Sidenav />
            <div className='flex justify-between p-[7%] md:p-[2%] gap-10 md:gap-0'>
                <h1 className='text-white text-3xl font-semibold'>Trending</h1>
                <Dropdown title="Filter" options={['tv', 'movie', 'all']} func={(e) => setCategory(e.target.value)} />
            </div>
            <HorizontalCards data={trending} />
            {/* <div className=''>
                <h1 className="text-white bg-orange-400/15 p-4">Home</h1>
            </div> */}
        </div>
    ) 
}

export default Home