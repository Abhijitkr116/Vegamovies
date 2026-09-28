
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidenav() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const closeMenu = () => setIsOpen(false)

    const navLinks = [
        { name: 'Trending', path: '/trending' },
        { name: 'Popular', path: '/popular' },
        { name: 'Movies', path: '/movie' },
        { name: 'TV shows', path: '/tv' },
        { name: 'People', path: '/people' },
    ]

    const linkClass = (path) =>
        `block rounded-lg px-4 py-3 transition duration-300 ${location.pathname === path
            ? 'bg-[#F95C4B] text-white'
            : 'text-zinc-300 hover:bg-[#F95C4B] hover:text-white'
        }`

    return (
        <>
            {/* Mobile menu button */}
            {!isOpen && <button type="button" onClick={() => setIsOpen(true)} aria-label="Open navigation menu" aria-expanded={isOpen} className="fixed left-4 top-3 z-[60] rounded-lg bg-zinc-900 p-2 text-white shadow-lg md:hidden">
                <i className="ri-menu-line text-2xl cursor-pointer"></i>
            </button>}

            {/* Mobile backdrop */}
            {isOpen && (
                <button type="button" aria-label="Close navigation menu cursor-pointer" onClick={closeMenu} className="fixed inset-0 z-40 bg-black/70 md:hidden"/>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-auto border-r border-zinc-700 bg-[#111111] p-5 transition-transform duration-300 ease-in-out md:w-64 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Logo and mobile close button */}
                <div className="mb-5 flex items-center justify-between">
                    <h1 className="flex items-center gap-2 text-xl font-bold text-white sm:text-2xl">
                        <i className="ri-tv-fill text-3xl text-[#F95C4B]"></i>
                        Vegamovies
                    </h1>

                    <button type="button" onClick={closeMenu} aria-label="Close navigation menu"
                        className="rounded-lg p-2 text-white hover:bg-zinc-800 md:hidden"
                    >
                        <i className="ri-close-line text-2xl"></i>
                    </button>
                </div>

                {/* Main navigation */}
                <nav className="border-b border-zinc-700 pb-5">
                    <h2 className="mb-3 px-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                        New Feeds
                    </h2>

                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={closeMenu}
                                className={linkClass(link.path)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </nav>

                {/* Website information */}
                <nav className="py-5">
                    <h2 className="mb-3 px-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                        Website Information
                    </h2>

                    <div className="flex flex-col gap-1">
                        <Link to="/about" onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-zinc-300 transition hover:bg-[#F95C4B] hover:text-white">
                            About Vegamovies
                        </Link>

                        <Link to="/contact" onClick={closeMenu}
                            className="rounded-lg px-4 py-3 text-zinc-300 transition hover:bg-[#F95C4B] hover:text-white">
                            Contact us
                        </Link>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export default Sidenav