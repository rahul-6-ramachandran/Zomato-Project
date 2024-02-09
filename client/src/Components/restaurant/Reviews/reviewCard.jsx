import { FaStar } from "react-icons/fa"
function ReviewCard() {
  return (
    <>
     <div className="flex flex-col gap-3">
        <div className=" flex items-center justify-between ">
          <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full " >
                <img className="w-full h-full rounded-full object-cover" src="https://b.zmtcdn.com/data/user_profile_pictures/aa7/dbfe90a563f477473dbac1a83a8c8aa7.jpg" alt="" />
            </div>
         
            <div className="flex flex-col gap-1">
                <h3 className="font-medium text-xl  ">Justus Rahndel Moncherry</h3>
                <p>30 reviews &#x2022; </p>
            </div>
            </div>
            <button className="text-zomato-200 text-xl px-3 border border-zomato-200 p-2 rounded-lg hover:border-zomato-500 hover:text-zomato-500">Follow</button>
        </div>
        <div>
            <div className="flex items-center gap-3  mx-2">
                <span className="text text-white bg-green-600 flex items-center gap-1 rounded-lg px-2 py-1 items-center">1 <FaStar/></span>
                <h5 className="font-regular uppercase">Delivery</h5>
                <small className="text-gray-400">3 days ago</small>
            </div>
        </div>
        <div>
            <p className="text-xl text-gray-500 ">I ordered this sushi plater and specifically stated that i want non veg only and they literally send me a veg only platter</p>
        </div>
     </div>
    </>
   
  )
}

export default ReviewCard