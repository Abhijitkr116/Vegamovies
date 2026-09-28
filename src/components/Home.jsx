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
        <div className='relative min-h-screen w-full overflow-hidden md:ml-64 md:w-[calc(100%-16rem)]'>
            <Topnav />
            <Header data={wallpaper} />
            <Sidenav />
            <div className='flex justify-between p-[7%] md:p-[2%] gap-10 md:gap-0'>
                <h1 className='text-white text-3xl font-semibold'>Trending</h1>
                <Dropdown title="Filter" options={['tv', 'movie', 'all']} func={(e)=> setCategory(e.target.value)} />
            </div>
            <HorizontalCards data={trending} />
            {/* <div className=''>
                <h1 className="text-white bg-orange-400/15 p-4">Home</h1>
            </div> */}
        </div>
    ) : <Loader/>
}

export default Home