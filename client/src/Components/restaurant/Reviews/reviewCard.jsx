import { FaStar } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { getUser } from "../../../Redux/Reducer/user/userSlice"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
function ReviewCard(props) {
  const [user,setUSer] = useState("")
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getUser(props.user)).then(data=>setUSer(data.payload.user.fullname) )
  },[])
  return (
    <>
     <div className="flex flex-col gap-3">
        <div className=" flex items-center justify-between ">
          <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full " >
                <img className="w-full h-full rounded-full object-cover" src={user} alt="" />
            </div>
         
            <div className="flex flex-col gap-1">
                <h3 className="font-medium text-xl  ">{user}</h3>
                <p>30 reviews &#x2022; </p>
            </div>
            </div>
            <button className="text-zomato-200 text-xl px-3 border border-zomato-200 p-2 rounded-lg hover:border-zomato-500 hover:text-zomato-500">Follow</button>
        </div>
        <div>
            <div className="flex items-center gap-3  mx-2">
                <span className="text text-white bg-green-600 flex items-center gap-1 rounded-lg px-2 py-1 items-center">1 <FaStar/></span>
                <h5 className="font-regular uppercase">{props.isRestaurantReview ? "Dining" : "Delivery"}</h5>
                <small className="text-gray-400">{dayjs(props.createdAt).format("DD MM YYYY")}</small>
            </div>
        </div>
        <div>
            <p className="text-xl text-gray-500 ">{props.reviewText}</p>
        </div>
     </div>
    </>
   
  )
}

export default ReviewCard