
import React from 'react'
import { Link } from 'react-router-dom'

function ContactUs() {
    const contactOptions = [
        {
            icon: 'ri-mail-line',
            title: 'Email Support',
            description: 'For questions, feedback, or general inquiries.',
            detail: 'alphain116@gmail.com',
            action: 'Send an email',
            href: 'mailto:alphain116@gmail.com',
        },
        {
            icon: 'ri-feedback-line',
            title: 'Share Feedback',
            description: 'Tell us what you think and how we can improve.',
            detail: 'Your voice matters',
            action: 'Write to us',
            href: 'mailto:alphain116@gmail.com?subject=Feedback',
        },
        {
            icon: 'ri-customer-service-2-line',
            title: 'General Enquiries',
            description: 'Have a question about the website?',
            detail: 'We are here to help',
            action: 'Get in touch',
            href: 'mailto:alphain116@gmail.com?subject=General%20Enquiry',
        },
    ]

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#080808] px-5 pb-20 text-white sm:px-8 lg:px-14">
            {/* Background glow */}
            <div className="pointer-events-none absolute -top-40 left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#F95C4B]/10 blur-[130px]" />
            <div className="pointer-events-none absolute right-0 top-[600px] h-[300px] w-[300px] rounded-full bg-[#F95C4B]/5 blur-[100px]" />

            <div className="relative mx-auto max-w-6xl">
                {/* Navigation */}
                <nav className="flex h-20 items-center justify-between border-b border-white/10">
                    <Link to="/" className="flex items-center gap-2 text-xl font-black tracking-tight sm:text-2xl">
                        <span className="text-[#F95C4B]">VEGA</span>MOVIES
                        <span className="ml-1 rounded border border-[#F95C4B]/40 px-1.5 py-0.5 text-[9px] font-semibold tracking-[0.2em] text-[#F95C4B]">CONTACT</span>
                    </Link>
                    <Link to="/" className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-[#F95C4B] hover:text-[#F95C4B]">
                        <i className="ri-arrow-left-line" />
                        <span>Back to Home</span>
                    </Link>
                </nav>

                {/* Hero */}
                <section className="relative py-16 text-center sm:py-24">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F95C4B]/20 bg-[#F95C4B]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F95C4B]">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#F95C4B]" />
                        We're listening
                    </div>

                    <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                        Let's talk
                        <span className="text-[#F95C4B]"> movies.</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                        Got a question, suggestion, or just want to say hello?
                        Drop us a message. Every great story starts with a conversation.
                    </p>

                    <div className="mt-9 flex items-center justify-center gap-2 text-xs text-zinc-500">
                        <i className="ri-clapperboard-line text-lg text-[#F95C4B]" />
                        <span>Questions, ideas, feedback. All welcome.</span>
                    </div>
                </section>

                {/* Contact cards */}
                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {contactOptions.map((item, index) => (
                        <div key={index} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#F95C4B]/50 hover:bg-[#F95C4B]/[0.04]">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#F95C4B]/20 bg-[#F95C4B]/10 text-2xl text-[#F95C4B] transition group-hover:bg-[#F95C4B] group-hover:text-white">
                                <i className={item.icon} />
                            </div>
                            <h2 className="text-lg font-bold">{item.title}</h2>
                            <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-400">{item.description}</p>
                            <p className="mt-4 break-words text-sm font-medium text-zinc-200">{item.detail}</p>
                            <a href={item.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F95C4B] transition hover:gap-3">
                                {item.action}
                                <i className="ri-arrow-right-line" />
                            </a>
                        </div>
                    ))}
                </section>

                {/* Form and side panel */}
                <section className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-12">
                    {/* Contact form */}
                    <div className="rounded-3xl border border-white/10 bg-[#101010] p-6 sm:p-9">
                        <div className="mb-8">
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#F95C4B]">Send a message</p>
                            <h2 className="text-2xl font-bold sm:text-3xl">We'd love to hear from you.</h2>
                            <p className="mt-3 text-sm leading-6 text-zinc-400">Fill out the form below and tell us what's on your mind.</p>
                        </div>

                        <form action="mailto:alphain116@gmail.com" method="post" encType="text/plain" className="space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">Your name</label>
                                    <input id="name" name="name" type="text" placeholder="John Doe" required className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#F95C4B] focus:ring-1 focus:ring-[#F95C4B]" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">Email address</label>
                                    <input id="email" name="email" type="email" placeholder="john@example.com" required className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#F95C4B] focus:ring-1 focus:ring-[#F95C4B]" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-zinc-300">Subject</label>
                                <select id="subject" name="subject" required defaultValue="" className="w-full h-[50px] rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-300 outline-none transition focus:border-[#F95C4B] focus:ring-1 focus:ring-[#F95C4B]">
                                    <option value="" disabled>Select a topic <i class="ri-arrow-down-s-fill"></i></option>
                                    <option value="General enquiry">General enquiry</option>
                                    <option value="Feedback">Feedback</option>
                                    <option value="Technical issue">Technical issue</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">Your message</label>
                                <textarea id="message" name="message" rows="5" required placeholder="Write your message here..." className="w-full resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#F95C4B] focus:ring-1 focus:ring-[#F95C4B]" />
                            </div>

                            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F95C4B] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#e94b3b] hover:shadow-[0_8px_30px_rgba(249,92,75,0.2)] sm:w-auto">
                                Send Message
                                <i className="ri-send-plane-fill" />
                            </button>
                            <p className="text-xs leading-5 text-zinc-600">This opens your default email application. Connect a backend or form service to receive messages directly on your website.</p>
                        </form>
                    </div>

                    {/* Side panel */}
                    <aside className="flex flex-col gap-5">
                        <div className="relative flex min-h-[260px] flex-1 flex-col justify-between overflow-hidden rounded-3xl border border-[#F95C4B]/20 bg-gradient-to-br from-[#24110f] via-[#130d0c] to-[#0c0c0c] p-7">
                            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border-[30px] border-[#F95C4B]/5" />
                            <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full border border-[#F95C4B]/10" />
                            <div className="relative">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F95C4B] text-2xl">
                                    <i className="ri-movie-2-line" />
                                </div>
                                <h3 className="text-2xl font-bold leading-snug">Every great movie starts with a story.</h3>
                                <p className="mt-3 text-sm leading-6 text-zinc-400">And every great platform gets better with your feedback.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F95C4B]">
                                <span className="h-px w-8 bg-[#F95C4B]" />
                                Stay connected
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                            <h3 className="text-lg font-bold">Before you message us</h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-400">A little detail helps us understand your question. If you're reporting an issue, include what happened and which device or browser you're using.</p>
                            <div className="mt-5 flex items-start gap-3 text-sm text-zinc-300">
                                <i className="ri-check-line mt-0.5 text-lg text-[#F95C4B]" />
                                <span>Describe the issue clearly</span>
                            </div>
                            <div className="mt-3 flex items-start gap-3 text-sm text-zinc-300">
                                <i className="ri-check-line mt-0.5 text-lg text-[#F95C4B]" />
                                <span>Include relevant details</span>
                            </div>
                            <div className="mt-3 flex items-start gap-3 text-sm text-zinc-300">
                                <i className="ri-check-line mt-0.5 text-lg text-[#F95C4B]" />
                                <span>Let us know how to reach you</span>
                            </div>
                        </div>
                    </aside>
                </section>

                {/* Footer */}
                <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-center sm:flex-row sm:text-left">
                    <p className="text-sm text-zinc-500">© {new Date().getFullYear()} VegaMovies. All rights reserved.</p>
                    <Link to="/" className="text-sm text-zinc-400 transition hover:text-[#F95C4B]">Back to browsing <i className="ri-arrow-right-line ml-1" /></Link>
                </footer>
            </div>
        </div>
    )
}

export default ContactUs
