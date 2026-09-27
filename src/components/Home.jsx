import { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import axios from '../utils/axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown'
import Loader from './Loader';

function Home() {
    document.title = "Vegamovies | Home"

    const [wallpaper, setWallpaper] = useState(null);
    const [trending, settrending] = useState([]);
    const [category, setCategory] = useState("all");

    const GetHeaderWallpaper = async () => {

        try{
            const { data } = await axios.get(`/trending/all/day`);
            let random_data = data.results[(Math.random() * data.results.length).toFixed()];
            setWallpaper(random_data);
        }
        catch(error){
            console.log("Error: ", error)
        }
    }

    const GetTrendingMovie = async () => {

        try{
            const { data } = await axios.get(`/trending/${category}/day`);
            settrending(data.results)
        }
        catch(error){
            console.log("Error: ", error)
        }
    }


    useEffect(() => {
        GetTrendingMovie();
        !wallpaper && GetHeaderWallpaper();
    }, [category])

    return wallpaper && trending ? (
        <div className='w-[calc(100%-20vw)] min-h-screen relative ml-[20vw] overflow-hidden'>
            <Topnav />
            <Header data={wallpaper} />
            <div className='flex justify-between p-5'>
                <h1 className='text-white text-3xl font-semibold'>Trending</h1>
                <Dropdown title="Filter" options={['tv', 'movie', 'all']} func={(e)=> setCategory(e.target.value)} />
            </div>
            <HorizontalCards data={trending} />
            <div className=''>
                <h1 className="text-white bg-orange-400/15 p-4">Home</h1>
            </div>
        </div>
    ) : <Loader/>
}

export default Home