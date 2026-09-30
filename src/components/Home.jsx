
import { useEffect, useState } from 'react'
import Topnav from './partials/Topnav'
import axios from '../utils/axios'
import Header from './partials/Header'
import HorizontalCards from './partials/HorizontalCards'
import Dropdown from './partials/Dropdown'
import Loader from './Loader'
import Sidenav from './partials/Sidenav'

function Home() {
    document.title = "Vegamovies | Home"

    const [wallpaper, setWallpaper] = useState(null)
    const [trending, setTrending] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [category, setCategory] = useState("all")

    const GetHeaderWallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`)

            const randomIndex = Math.floor(
                Math.random() * data.results.length
            )

            setWallpaper(data.results[randomIndex])
        } catch (error) {
            console.error("Header wallpaper error:", error)
            setError("Failed to load movie data.")
        }
    }

    const GetTrendingMovie = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`)

            setTrending(data.results)
        } catch (error) {
            console.error("Trending movies error:", error)
            setError("Failed to load trending movies.")
        }
    }

    useEffect(() => {
        const loadHomeData = async () => {
            setLoading(true)
            setError(null)

            await Promise.all([
                GetTrendingMovie(),
                GetHeaderWallpaper()
            ])

            setLoading(false)
        }

        loadHomeData()
    }, [category])

    if (loading) {
        return <Loader />
    }

    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#0b0b0b] px-5 text-white">
                <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#151515] p-8 text-center shadow-2xl">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F95C4B]/10 text-[#F95C4B]">
                        <i className="ri-wifi-off-line text-3xl"></i>
                    </div>
                    <h2 className="text-2xl font-bold">Something went wrong</h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{error}</p>
                    <button type="button" onClick={() => window.location.reload()} className="mt-6 rounded-xl bg-[#F95C4B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e94c3c]">
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#0b0b0b] text-white md:ml-64 md:w-[calc(100%-16rem)]">
            <Sidenav />

            <div className="relative z-10">
                <Topnav />

                <main className="pb-12">
                    <section className="relative">
                        <Header data={wallpaper} />
                    </section>

                    <section className="px-4 pt-8 sm:px-6 md:px-8 lg:px-10">
                        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <div className="mb-2 flex items-center gap-2">
                                    <span className="h-1 w-7 rounded-full bg-[#F95C4B]"></span>
                                    <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#F95C4B]">What's popular</p>
                                </div>
                                <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Trending Now</h1>
                                <p className="mt-1 text-sm text-zinc-500">Discover what everyone is watching today.</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-xs font-medium text-zinc-500">Explore by</span>
                                <div className="rounded-xl border border-white/10 bg-[#171717] p-1">
                                    <Dropdown title="Filter" options={['tv', 'movie', 'all']} func={(e) => setCategory(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 flex items-center justify-between">
                            <p className="text-xs font-medium text-zinc-500">
                                {category === 'all' ? 'Movies & TV' : category === 'tv' ? 'TV Shows' : 'Movies'}
                                <span className="mx-2 text-zinc-700">•</span>
                                Daily trending
                            </p>
                            <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Updated daily</span>
                        </div>

                        <div className="-mx-4 overflow-hidden sm:-mx-6 md:-mx-8 lg:-mx-10">
                            <div className="px-4 sm:px-6 md:px-8 lg:px-10">
                                <HorizontalCards data={trending} />
                            </div>
                        </div>
                    </section>

                    <section className="px-4 pt-10 sm:px-6 md:px-8 lg:px-10">
                        <div className="rounded-2xl border border-white/5 bg-gradient-to-r from-[#191919] to-[#111111] p-5 sm:p-7">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F95C4B]/10 text-[#F95C4B]">
                                        <i className="ri-compass-3-line text-2xl"></i>
                                    </div>
                                    <div>
                                        <h2 className="text-base font-bold sm:text-lg">Not sure what to watch?</h2>
                                        <p className="mt-1 max-w-lg text-sm leading-6 text-zinc-500">Browse the latest trending titles and find something for your next movie night.</p>
                                    </div>
                                </div>
                                <a href="/trending" className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-[#F95C4B]/50 hover:bg-[#F95C4B]/10 hover:text-white sm:self-center">
                                    Explore more
                                    <i className="ri-arrow-right-line"></i>
                                </a>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Home
