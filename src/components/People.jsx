import { useNavigate } from "react-router-dom"
import Topnav from "./partials/Topnav";
import Dropdown from "../components/partials/Dropdown";
import { useEffect, useState } from "react";
import axios from '../utils/axios';
import Cards from "./partials/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component"



function People() {

    const navigate = useNavigate();
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "Vegamovies | movie";

    const GetPeople = async () => {
        try {
            const { data } = await axios.get(`/person/popular?page=${page}`);

            if (data.results.length > 0) {
                setPeople((prevState) => [...prevState, ...data.results]);
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
        if (people.length === 0) {
            GetPeople();
        }
        else {
            setPage(1);
            setPeople([]);
            GetPeople();
        }
    }

    console.log(people);

    useEffect(() => {
        refreshHandler();
    }, []);

    return people.length > 0 ? (
        <div className="bg-black z-10 w-full min-h-screen">
            <div className="w-full flex items-center bg-gray-950 px-[3%]">
                <h1 className="text-2xl font-semibold text-zinc-400">
                    <i onClick={() => navigate(-1)} className="hover:text-[#F95C4B] cursor-pointer ri-arrow-left-line mr-2"></i>
                    People
                </h1>

                <Topnav />

            </div>

            <InfiniteScroll
                dataLength={people.length}
                next={GetPeople}
                hasMore={hasMore}
                loader={<h1 className="text-white">Loading...</h1>}
            >
                <Cards data={people} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loader />
    )
}

export default People