
import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
    const features = [
        {
            icon: 'ri-film-line',
            title: 'A World of Stories',
            description: 'Explore movies and TV shows across genres, from timeless classics to the latest releases.'
        },
        {
            icon: 'ri-compass-3-line',
            title: 'Discover Something New',
            description: 'Find your next watch through trending titles, popular picks, and recommendations.'
        },
        {
            icon: 'ri-heart-3-line',
            title: 'Made for Movie Lovers',
            description: 'A space designed for people who love discovering stories, characters, and unforgettable moments.'
        }
    ]

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#080808] text-white">
            {/* Background decoration */}
            <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#F95C4B]/10 blur-[150px]" />

            {/* Navigation */}
            <nav className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between border-b border-white/10 px-5 sm:px-8 lg:px-12">
                <Link to="/" className="text-xl font-black tracking-tight sm:text-2xl">
                    <span className="text-[#F95C4B]">VEGA</span>MOVIES
                </Link>
                <Link to="/" className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-[#F95C4B] hover:text-[#F95C4B]">
                    <i className="ri-arrow-left-line" />
                    Back to Home
                </Link>
            </nav>

            {/* Hero */}
            <section className="relative mx-auto flex max-w-7xl flex-col items-center px-5 pb-20 pt-20 text-center sm:px-8 sm:pt-28 lg:px-12 lg:pt-32">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F95C4B]/20 bg-[#F95C4B]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F95C4B]">
                    <i className="ri-clapperboard-line text-base" />
                    The story behind VegaMovies
                </div>

                <h1 className="max-w-5xl text-4xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
                    More than movies.
                    <br />
                    <span className="text-[#F95C4B]">It's a feeling.</span>
                </h1>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                    We're here for the stories that stay with you, the characters you remember, and the moments that make you press play on just one more movie.
                </p>

                <div className="mt-9 flex flex-wrap justify-center gap-3">
                    <Link to="/movie" className="rounded-xl bg-[#F95C4B] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#e94b3b] hover:shadow-[0_8px_30px_rgba(249,92,75,0.2)]">
                        Explore Movies <i className="ri-arrow-right-line ml-2" />
                    </Link>
                    <Link to="/contact" className="rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-[#F95C4B] hover:text-[#F95C4B]">
                        Contact Us
                    </Link>
                </div>

                {/* Cinematic visual */}
                <div className="relative mt-16 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#111] shadow-2xl shadow-black/50">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F95C4B]/10 via-transparent to-transparent" />
                    <div className="relative flex aspect-[16/9] flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_55%,rgba(249,92,75,0.2),transparent_45%),linear-gradient(135deg,#191919,#080808_65%)]">
                        <div className="absolute left-[12%] top-[15%] h-24 w-24 rounded-full border border-white/5 sm:h-40 sm:w-40" />
                        <div className="absolute bottom-[12%] right-[10%] h-32 w-32 rounded-full border border-[#F95C4B]/10 sm:h-56 sm:w-56" />
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#F95C4B]/50 bg-[#F95C4B]/10 text-3xl text-[#F95C4B] shadow-[0_0_60px_rgba(249,92,75,0.15)] sm:h-24 sm:w-24 sm:text-5xl">
                            <i className="ri-play-fill ml-1" />
                        </div>
                        <p className="relative mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 sm:text-sm">Every story matters</p>
                    </div>
                </div>
            </section>

            {/* About text */}
            <section className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:pb-28">
                <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#F95C4B]">Who we are</p>
                    <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                        Built around the love of cinema.
                    </h2>
                </div>
                <div className="space-y-5 text-sm leading-8 text-zinc-400 sm:text-base">
                    <p>
                        VegaMovies is a movie and TV discovery experience created for people who enjoy exploring the world of entertainment. We bring movie details, genres, ratings, and recommendations into one place to make finding something to watch easier.
                    </p>
                    <p>
                        Whether you're looking for a familiar favorite or something completely new, our goal is to make the journey from browsing to choosing your next watch feel simple and enjoyable.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="relative border-y border-white/10 bg-white/[0.02]">
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#F95C4B]">The VegaMovies experience</p>
                        <h2 className="text-3xl font-black sm:text-4xl">Your next favorite starts here.</h2>
                        <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">A little of what makes exploring entertainment enjoyable.</p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        {features.map((feature, index) => (
                            <div key={index} className="group rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#F95C4B]/50 hover:bg-[#F95C4B]/[0.03] sm:p-8">
                                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F95C4B]/20 bg-[#F95C4B]/10 text-2xl text-[#F95C4B] transition group-hover:bg-[#F95C4B] group-hover:text-white">
                                    <i className={feature.icon} />
                                </div>
                                <h3 className="text-xl font-bold">{feature.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-zinc-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
                <div className="relative overflow-hidden rounded-3xl border border-[#F95C4B]/20 bg-gradient-to-br from-[#24110f] via-[#120d0c] to-[#0b0b0b] px-6 py-14 text-center sm:px-12 sm:py-20">
                    <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border-[35px] border-[#F95C4B]/5" />
                    <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-[35px] border-[#F95C4B]/5" />
                    <div className="relative mx-auto max-w-3xl">
                        <i className="ri-movie-2-line text-4xl text-[#F95C4B]" />
                        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F95C4B]">Our mission</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                            Make discovering your next watch effortless.
                        </h2>
                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                            We want to make entertainment discovery feel less like searching and more like finding a story waiting just for you.
                        </p>
                        <Link to="/trending" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#F95C4B] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#e94b3b]">
                            Find What's Trending <i className="ri-arrow-right-line" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative border-t border-white/10 px-5 py-7 sm:px-8 lg:px-12">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                    <Link to="/" className="text-lg font-black tracking-tight">
                        <span className="text-[#F95C4B]">VEGA</span>MOVIES
                    </Link>
                    <p className="text-xs text-zinc-500">© {new Date().getFullYear()} VegaMovies. Made for movie lovers.</p>
                    <Link to="/contact" className="text-sm text-zinc-400 transition hover:text-[#F95C4B]">Contact Us</Link>
                </div>
            </footer>
        </div>
    )
}

export default AboutUs
