
import React from 'react'
import { useNavigate } from 'react-router-dom'

function PersonDetails() {
    const navigate = useNavigate()

    return (
        <div className="relative grid min-h-screen w-full place-items-center overflow-hidden bg-[#0b0b0b] px-5 text-white">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#F95C4B]/10 blur-[100px]"></div>
                <div className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-[#F95C4B]/5 blur-[110px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0b0b0b_75%)]"></div>
            </div>

            {/* Back button */}
            <button type="button" onClick={() => navigate(-1)} aria-label="Go back" className="absolute left-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-zinc-300 backdrop-blur-md transition hover:border-[#F95C4B]/40 hover:bg-[#F95C4B]/10 hover:text-[#F95C4B] sm:left-8 sm:top-8">
                <i className="ri-arrow-left-line"></i>
            </button>

            {/* Main content */}
            <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center">
                <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-3xl border border-[#F95C4B]/20 bg-[#F95C4B]/10 shadow-2xl shadow-[#F95C4B]/5">
                    <i className="ri-user-smile-line text-4xl text-[#F95C4B]"></i>
                </div>

                <span className="mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-zinc-500">
                    VegaMovies
                </span>

                <h1 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                    It's just a reflection
                    <span className="mt-1 block text-[#F95C4B]">of yourself... 😊</span>
                </h1>

                <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500 sm:text-base">
                    Every story has a face. Every face has a story.
                </p>

                <button type="button" onClick={() => navigate(-1)} className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#F95C4B] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#F95C4B]/15 transition hover:-translate-y-0.5 hover:bg-[#e94c3c]">
                    <i className="ri-arrow-left-line"></i>
                    Go back
                </button>
            </div>

            {/* Bottom detail */}
            <div className="absolute bottom-6 text-[10px] font-medium uppercase tracking-[2px] text-zinc-700">
                Discover the stories behind the screen
            </div>
        </div>
    )
}

export default PersonDetails
