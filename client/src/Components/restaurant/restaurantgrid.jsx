

function RestaurantGrid(props) {

    return (
        <>
            <div className= 'w-full h-38 hidden md:flex flex-wrap gap-2'>
                <div className='w-7/12 h-full overflow-hidden'>
                    <img className='w-full h-full transform transition duration-500 hover:scale-110' src={props.images[0]} alt="" />
                </div>

                <div className='w-1/6 h-19  flex flex-col gap-2 overflow-hidden object-cover'>
                    <img className='w-full h-full transform transition duration-500 hover:scale-110 ' src={props.images[1]} alt="" />
                    <img className='w-full h-full transform transition duration-500 hover:scale-110' src={props.images[2]} alt="" />

                </div>
                <div className='w-1/6 h-19  flex flex-col gap-2 overflow-hidden'>
                    <img className='w-full h-full transform transition duration-500 hover:scale-110' src={props.images[3]} alt="" />
                    <div className='w-full h-full relative'>
                        <img className='w-full h-full transform transition duration-500 hover:scale-110' src={props.images[4]} alt="" />
                        <div className='w-full h-full absolute bg-black bg-opacity-40 inset-0 ' />
                        <h4 className='absolute text-center w-full h-full inset-y-2/4 z-5 font-semibold text-white text-xl'>View Gallery</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestaurantGrid