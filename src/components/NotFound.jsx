import notfound from '/noimage.jpg'

function NotFound() {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-5 bg-black z-50 overflow-hidden'>
            <img className='h-[40%]' src={notfound} alt="" />
            <h1 className='text-zinc-200'>Invalid URL</h1>
        </div>
    )
}

export default NotFound