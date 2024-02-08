import { FaStar } from 'react-icons/fa6'

function RestaurantInfo(props) {
  return (
    <>
      <div className="container mx-auto ">
                <div className='flex flex-wrap justify-between  my-4'>
                    <h1 className='text-lg md:text-5xl text-extrabold  '>{props.name}</h1>
                    <div className='flex flex-wrap gap-3 md:mr-5 md:pr-5'>
                        <div className='hidden md:flex flex-wrap gap-2  items-center'>
                            <div className=" flex flex-wrap justify-between bg-green-700 px-2 py-1  items-center text-gray-100 rounded-lg text-xl ">
                                <strong>{props.rating}</strong>
                                <span >
                                    <FaStar />
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-semibold text-xl'>129</span>
                                <p>Dining Ratings</p>
                            </div>
                            <div className='bg-green-400 '></div>
                        </div>

                        <div className='flex flex-wrap gap-2 items-center'>
                            <div className="flex flex-wrap justify-between bg-green-700 px-2 py-1  items-center text-gray-100 rounded-lg md:text-xl ">
                              <strong>3.8</strong>  
                                <span >
                                    <FaStar />
                                </span>
                               
                                <span className='md:hidden'>Delivery</span>
                            </div>
                            <div className='md:flex flex-col hidden '>
                                <span className='font-semibold text-xl'>{props.deliveryRating}</span>
                                <p className='border-dashed border-b border-gray-400'>Delivery Ratings</p>
                            </div>
                            
                        </div>

                    </div>
                </div>


                <div className='flex flex-wrap justify-between '>
                    <p className='md:text-xl text-gray-500 font-normal'>{props.cuisine}</p>
                </div>
                <div className='flex flex-wrap justify-between '>
                <p className='md:text-xl text-gray-400 hover:text-gray-500'>{props.address}</p>
                </div>
                <div className='flex flex-wrap justify-between my-2'>
                <p className='text-xl text-gray-500 font-normal'><span className='text-zomato-100 '>Open Now</span> - 8am – 12midnight (Today)
</p>
                </div>
                <div className='flex flex-wrap justify-between my-2'>
                <div></div>
                </div>
             
            </div>
    </>
  )
}

export default RestaurantInfo