import loader from '/loader1.gif'

function Loader() {
    return (
        <div className='w-full h-screen grid place-items-center bg-black z-50'>
            <img className='h-[20%]' src={loader} alt="" />
        </div>
    )
}

export default Loader