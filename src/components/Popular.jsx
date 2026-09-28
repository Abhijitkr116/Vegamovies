import { useNavigate } from "react-router-dom"
import Topnav from "./partials/Topnav";
import Dropdown from "../components/partials/Dropdown";
import { useEffect, useState } from "react";
import axios from '../utils/axios';
import Cards from "./partials/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component"

function Popular() {

    const navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "Vegamovies | popular";

    const GetPopular = async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);

            if (data.results.length > 0) {
                setPopular((prevState) => [...prevState, ...data.results]);
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
        if (popular.length === 0) {
            GetPopular();
        }
        else {
            setPage(1);
            setPopular([]);
            GetPopular();
        }
    }

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return popular.length > 0 ? (
        <div className="bg-black z-10 w-full min-h-screen">
            <div className="w-full flex items-center bg-gray-950 px-[3%]">
                <h1 className="text-2xl font-semibold text-zinc-400">
                    <i onClick={() => navigate(-1)} className="hover:text-[#F95C4B] cursor-pointer ri-arrow-left-line mr-2"></i>
                    Popular
                </h1>

                <Topnav />

                <Dropdown
                    title="Category"
                    options={['tv', 'movie']}
                    func={(e) => setCategory(e.target.value)} />

                <div className="w-[2%]"></div>
            </div>

            <InfiniteScroll
                dataLength={popular.length}
                next={GetPopular}
                hasMore={hasMore}
                loader={<h1 className="text-white">Loading...</h1>}
            >
                <Cards data={popular} title={category}/>
            </InfiniteScroll>
        </div>
    ) : (
        <Loader />
    )
}

export default Popular