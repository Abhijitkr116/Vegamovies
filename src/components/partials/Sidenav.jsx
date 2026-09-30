
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidenav() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const closeMenu = () => setIsOpen(false)

    const navLinks = [
        { name: 'Trending', path: '/trending', icon: 'ri-fire-fill' },
        { name: 'Popular', path: '/popular', icon: 'ri-star-fill' },
        { name: 'Movies', path: '/movie', icon: 'ri-movie-2-fill' },
        { name: 'TV Shows', path: '/tv', icon: 'ri-tv-2-fill' },
        { name: 'People', path: '/people', icon: 'ri-user-star-fill' },
    ]

    const infoLinks = [
        { name: 'About Vegamovies', path: '/about', icon: 'ri-information-fill' },
        { name: 'Contact Us', path: '/contact', icon: 'ri-mail-fill' },
    ]

    const linkClass = (path) => {
        const active = location.pathname === path
        return `group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${active ? 'bg-[#F95C4B] text-white shadow-lg shadow-[#F95C4B]/20' : 'text-zinc-400 hover:bg-zinc-800/80 hover:text-white'}`
    }

    const renderLinks = (links) => links.map((link) => {
        const active = location.pathname === link.path
        return (
            <Link key={link.path} to={link.path} onClick={closeMenu} className={linkClass(link.path)}>
                <i className={`${link.icon} text-xl ${active ? 'text-white' : 'text-zinc-500 group-hover:text-[#F95C4B]'} transition-colors`}></i>
                <span className="flex-1">{link.name}</span>
                {active && <span className="h-1.5 w-1.5 rounded-full bg-white"></span>}
            </Link>
        )
    })

    return (
        <>
            {!isOpen && <button type="button" onClick={() => setIsOpen(true)} aria-label="Open navigation menu" aria-expanded={isOpen} className="fixed left-4 top-4 z-[60] rounded-xl border border-zinc-700 bg-[#181818] p-3 text-white shadow-xl md:hidden">
                <i className="ri-menu-line text-xl"></i>
            </button>}

            {isOpen && <button type="button" aria-label="Close navigation menu" onClick={closeMenu} className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden" />}

            <aside className={`fixed left-0 top-0 z-50 flex h-screen w-[280px] flex-col border-r border-white/5 bg-[#101010] px-5 py-6 transition-transform duration-300 ease-in-out md:w-64 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                
                <div className="mb-9 flex items-center justify-between">
                    <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F95C4B] shadow-lg shadow-[#F95C4B]/20">
                            <i className="ri-clapperboard-fill text-2xl text-white"></i>
                        </div>
                        <div>
                            <h1 className="text-xl font-extrabold tracking-tight text-white">Vega<span className="text-[#F95C4B]">Movies</span></h1>
                            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[2px] text-zinc-500">Your cinema hub</p>
                        </div>
                    </Link>

                    <button type="button" onClick={closeMenu} aria-label="Close navigation menu" className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white md:hidden">
                        <i className="ri-close-line text-2xl"></i>
                    </button>
                </div>

                <div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[2px] text-zinc-600">Discover</div>
                <nav className="flex flex-col gap-1.5">
                    {renderLinks(navLinks)}
                </nav>

                <div className="my-6 border-t border-white/5"></div>

                <div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[2px] text-zinc-600">More</div>
                <nav className="flex flex-col gap-1.5">
                    {renderLinks(infoLinks)}
                </nav>

                <div className="mt-auto pt-6">
                    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-zinc-800/80 to-zinc-900 p-4">
                        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#F95C4B]/10 blur-2xl"></div>
                        <div className="relative">
                            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#F95C4B]/15 text-[#F95C4B]">
                                <i className="ri-movie-fill text-xl"></i>
                            </div>
                            <h3 className="text-sm font-bold text-white">Find your next watch</h3>
                            <p className="mt-1 text-xs leading-relaxed text-zinc-500">Explore movies and shows worth your time.</p>
                            <Link to="/trending" onClick={closeMenu} className="mt-4 flex items-center justify-between rounded-lg bg-[#F95C4B] px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-[#e94c3c]">
                                Explore trending
                                <i className="ri-arrow-right-line text-base"></i>
                            </Link>
                        </div>
                    </div>

                    <p className="mt-5 text-center text-[10px] tracking-wide text-zinc-700">VEGAMOVIES · DISCOVER MORE</p>
                </div>
            </aside>
        </>
    )
}

export default Sidenav
