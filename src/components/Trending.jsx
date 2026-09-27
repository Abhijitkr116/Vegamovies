import { useNavigate } from "react-router-dom"
import Topnav from "./partials/Topnav";
import Dropdown from "../components/partials/Dropdown";
import { useEffect, useState } from "react";
import axios from '../utils/axios';
import Cards from "./partials/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component"



function Trending() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "Vegamovies | Trending";

    const GetTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);

            if (data.results.length > 0) {
                setTrending((prevState) => [...prevState, ...data.results]);
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
        if (trending.length === 0) {
            GetTrending();
        }
        else {
            setPage(1);
            setTrending([]);
            GetTrending();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category, duration]);

    return trending.length > 0 ? (
        <div className="bg-black z-10 w-full min-h-screen">
            <div className="w-full flex items-center bg-gray-950 px-[3%]">
                <h1 className="text-2xl font-semibold text-zinc-400">
                    <i onClick={() => navigate(-1)} className="hover:text-[#F95C4B] cursor-pointer ri-arrow-left-line mr-2"></i>
                    Trending
                </h1>

                <Topnav />

                <Dropdown
                    title="Category"
                    options={['tv', 'movie', 'all']}
                    func={(e) => setCategory(e.target.value)} />

                <div className="w-[2%]"></div>

                <Dropdown
                    title="Duration"
                    options={['day', 'week']}
                    func={(e) => setDuration(e.target.value)} />
            </div>

            <InfiniteScroll
                dataLength={trending.length}
                next={GetTrending}
                hasMore={hasMore}
                loader={<h1 className="text-white">Loading...</h1>}
            >
                <Cards data={trending} />
            </InfiniteScroll>
        </div>
    ) : <Loader />
}

export default Trending