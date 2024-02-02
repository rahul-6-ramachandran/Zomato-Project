import { FaStar } from "react-icons/fa"
function RestaurantCards() {
    return (
        <>
            <div className='flex flex-wrap gap-4 md:mt-5 p-4'>
                <div className='flex flex-col gap-3 bg-white p-3 w-full md:w-1/2 lg:w-1/3 transition duration-500 ease-in-out hover:shadow-2xl rounded-xl'>
                    <div className='w-50 h-50 relative'>
                        <div className="absolute px-3  bg-sky-600">
                        <span className="text-white">50% OFF</span>
                        </div>
                        <img src="https://b.zmtcdn.com/data/pictures/6/19008406/2137031075da5e1625f5e0ebc54fb78f_o2_featured_v2.jpeg?output-format=webp" alt="" className='w-full h-full rounded-xl' />
                    </div>
                    <div>
                        <div className='flex flex-wrap justify-between my-3 '>
                            <h3 className="font-semibold text-xl">Mehfil Biriyani</h3>
                            <div className="flex flex-wrap justify-between bg-green-700 px-1 items-center text-gray-100 rounded-lg">
                                4.3
                                <span >
                                    <FaStar />
                                </span>
                                
                            </div>

                        </div>
                        <div className='flex flex-wrap justify-between text-gray-500 text-lg'>
                            <p>Biriyani,Kerala,South Indi..</p>
                            <p>150 for one</p>
                        </div>
                        <div className="w-full flex ">
                        <span className="text-sm ">40 min</span>
                        </div>
                        
                        <div>

                        </div>
                    </div>



                    <p></p>
                </div>

            </div>
        </>

    )
}

export default RestaurantCards