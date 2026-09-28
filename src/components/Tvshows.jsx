import { useNavigate } from "react-router-dom"
import Topnav from "./partials/Topnav";
import Dropdown from "../components/partials/Dropdown";
import { useEffect, useState } from "react";
import axios from '../utils/axios';
import Cards from "./partials/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component"

function Tvshows() {

    const navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    const [tvshows, setTvshows] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "Vegamovies | TvShows";

    const GetTvShows = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);

            if (data.results.length > 0) {
                setTvshows((prevState) => [...prevState, ...data.results]);
                setPage(page + 1);
            }
            else {
                sethasMore(false);
            }
        }
        catch (error) {
            console.log("Error: ", error);
        }
    }

    const refreshHandler = () => {
        if (tvshows.length === 0) {
            GetTvShows();
        }
        else {
            setPage(1);
            setTvshows([]);
            GetTvShows();
        }
    }

    console.log(tvshows);

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return tvshows.length > 0 ? (
        <div className="bg-black z-10 w-full min-h-screen">
            <div className="w-full flex items-center bg-gray-950 px-[3%]">
                <h1 className="text-2xl font-semibold text-zinc-400">
                    <i onClick={() => navigate(-1)} className="hover:text-[#F95C4B] cursor-pointer ri-arrow-left-line mr-2"></i>
                    Movies
                </h1>

                <Topnav />

                <Dropdown
                    title="Category"
                    options={['on_the_air', 'popular', 'top_rated', 'airing_today']}
                    func={(e) => setCategory(e.target.value)} />

                <div className="w-[2%]"></div>
            </div>

            <InfiniteScroll
                dataLength={tvshows.length}
                next={GetTvShows}
                hasMore={hasMore}
                loader={<h1 className="text-white">Loading...</h1>}
            >
                <Cards data={tvshows} title="tv"/>
            </InfiniteScroll>
        </div>
    ) : (
        <Loader />
    )
}

export default Tvshows