import { FaStar } from "react-icons/fa"
function RestaurantCards(props) {
    return (
        <>
          
                <div className='flex flex-col gap-3 bg-white p-3 w-full md:w-1/2 lg:w-1/3 transition duration-500 ease-in-out hover:shadow-2xl rounded-xl'>
                    <div className='w-50 h-50 relative'>
                       {props.isOff && <div className="absolute px-3  bg-sky-600">
                        <span className="text-white">{props.isOff}% OFF</span>
                        </div>}
                        <img src={props.photos.length && props.photos[0]} alt="" className='w-full h-full rounded-xl' />
                    </div>
                    <div>
                        <div className='flex flex-wrap justify-between my-3 '>
                            <h3 className="font-semibold text-xl">{props.name}</h3>
                            <div className="flex flex-wrap justify-between bg-green-700 px-1 items-center text-gray-100 rounded-lg">
                                {props.rating}
                                <span >
                                    <FaStar />
                                </span>
                                
                            </div>

                        </div>
                        <div className='flex flex-wrap justify-between text-gray-500 text-lg'>
                            <p>{props.cuisine.join(",")}.</p>
                            <p>{props.averageCost} for one</p>
                        </div>
                        <div className="w-full flex ">
                        <span className="text-sm ">{props.duration} min</span>
                        </div>
                        
                        <div>

                        </div>
                    </div>



                    <p></p>
                </div>

        
        </>

    )
}

export default RestaurantCards